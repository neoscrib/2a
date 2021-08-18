// tslint:disable:ban-types

export interface IIntervalOptions {
    /**
     * The callback function to execute at the specified {@link #fixedRate} or {@link #fixedDelay}
     */
    callback: Function;
    /**
     * Execute the callback with a fixed period in milliseconds between invocations.
     */
    fixedRate?: number;
    /**
     * Execute the callback with a fixed period in milliseconds between the end of the last invocation and the start of the next.
     */
    fixedDelay?: number;
    /**
     * Number of milliseconds to delay before the first execution of a {@link #fixedRate} or {@link #fixedDelay} task.
     */
    initialDelay?: number;
}

/**
 * Schedules the execution of the specified callback. Exactly one of the {@link #fixedDelay}, or {@link #fixedRate} parameters must be specified.
 * @param callback The callback function to execute at the specified {@link #fixedRate} or {@link #fixedDelay}
 * @param fixedRate Execute the callback with a fixed period in milliseconds between invocations.
 * @param fixedDelay Execute the callback with a fixed period in milliseconds between the end of the last invocation and the start of the next.
 * @param initialDelay Number of milliseconds to delay before the first execution of a {@link #fixedRate} or {@link #fixedDelay} task.
 */
export default function interval({ callback, fixedRate, fixedDelay, initialDelay }: IIntervalOptions): () => void {
    if (typeof callback !== 'function') {
        throw new Error(`Invalid parameter: callback must be a function.`);
    }

    if ((fixedRate ?? fixedDelay ?? 0) <= 0) {
        throw new Error(`Invalid options: Either fixedRate or fixedDelay must be specified and greater than 0.`);
    }

    if (fixedRate > 0 && fixedDelay > 0) {
        throw new Error(`Invalid options: Either fixedRate or fixedDelay must be specified, but not both.`);
    }

    return fixedDelay ? fixedDelayInterval(callback, initialDelay, fixedDelay)
        : fixedRateInterval(callback, initialDelay, fixedRate);
}

function fixedDelayInterval(callback: Function, initialDelay: number, fixedDelay: number) {
    // execute with a fixed delay between the end one execution and the start of the next
    let timer: number;
    let currentDelay = initialDelay ?? 0;
    let finished = false;
    let internalCancel: () => void;

    const cancel = () => {
        finished = true;
        window.clearInterval(timer);
        internalCancel?.();
    };

    window.setTimeout(async () => {
        while (!finished) {
            try {
                await new Promise<void>(async (resolve, reject) => {
                    internalCancel = reject;
                    timer = window.setTimeout(async () => {
                        try {
                            const result = await callback();
                            if (result === true) {
                                cancel();
                            } else {
                                currentDelay = typeof result === 'number' ? result : fixedDelay;
                            }
                        } catch (e) {
                            console.error(e);
                        } finally {
                            resolve();
                        }
                    }, currentDelay);
                });
            } catch (e) {
                // cancelled
            }
        }
    });

    return cancel;
}

function fixedRateInterval(callback: Function, initialDelay: number, fixedRate: number) {
    // execute with a fixed rate between the start of one execution and the start of the next
    let timer: number;
    let currentRate = initialDelay ?? 0;

    const cancel = () => window.clearInterval(timer);
    const wrapped = async () => {
        try {
            const result = await callback();
            if (result === true) {
                cancel();
            } else {
                if (typeof result === 'number') {
                    if (currentRate !== result) {
                        window.clearInterval(timer);
                        timer = window.setInterval(wrapped, currentRate = result);
                    }
                } else if (currentRate !== fixedRate) {
                    window.clearInterval(timer);
                    timer = window.setInterval(wrapped, currentRate = fixedRate);
                }
            }
        } catch (e) {
            console.error(e);
        }
    };

    timer = window.setTimeout(() => {
        window.setTimeout(wrapped);
        timer = window.setInterval(wrapped, currentRate = fixedRate);
    }, currentRate);

    return cancel;
}
