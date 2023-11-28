// tslint:disable:ban-types
// tslint:disable:callable-types
import Reflect from '../Reflect';
import { SchedulingConstants } from './constants';
import interval, { IIntervalOptions } from './interval';

function startScheduled(metaKey: Function, options: IEnableSchedulingOptions) {
    const map: Map<string, IIntervalOptions> = Reflect.getMetadata(SchedulingConstants.Schedules, metaKey);
    if (map) {
        const schedules: Map<string, () => void> = Reflect.getMetadata(SchedulingConstants.Scheduled, this) ?? new Map();
        for (const [ name, { callback, ...rest } ] of map.entries()) {
            if (!schedules.has(name)) {
                if (!(options?.exclude?.includes(name) ?? false) && (options?.include?.includes(name) ?? true)) {
                    schedules.set(name, interval({ callback: callback.bind(this), ...rest }));
                }
            }
        }
        Reflect.defineMetadata(SchedulingConstants.Scheduled, schedules, this);
    }
}

interface IEnableSchedulingOptions {
    include?: string[];
    exclude?: string[];
}

export default (options?: IEnableSchedulingOptions) => {
    function decorator(target: any, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>): void;
    function decorator<T extends { new(...args: any[]): Function }>(target: T): T;
    function decorator<T extends { new(...args: any[]): Function }>(target: any, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<any>): T {
        if (!propertyKey) {
            // class decorator; schedule will be started when class is instantiated
            console.log(target, Reflect.getMetadata(SchedulingConstants.Schedules, target));
            return class extends (target as unknown as T) {
                public constructor(...args: any[]) {
                    // eslint-disable-next-line constructor-super
                    super(...args);
                    startScheduled.call(this, target, options);
                }
            };
        } else {
            // method decorator; schedules will be started when this method is first called
            const original = descriptor.value;
            descriptor.value = function (...args: any[]) {
                startScheduled.call(this, target.constructor, options);
                original.apply(this, args);
            };
        }
    }

    return decorator;
};
