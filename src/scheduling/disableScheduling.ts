import Reflect from '../Reflect';
import { SchedulingConstants } from './constants';

interface IDisableSchedulingOptions {
    include?: string[];
    exclude?: string[];
}

export default (options?: IDisableSchedulingOptions) => (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    // method decorator; schedules will be stopped when this method is first called
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const schedules: Map<string, () => void> = Reflect.getMetadata(SchedulingConstants.Scheduled, this);

        if (schedules) {
            for (const [ name, cancel ] of schedules.entries()) {
                if (!(options?.exclude?.includes(name) ?? false) && (options?.include?.includes(name) ?? true)) {
                    schedules.delete(name);
                    cancel();
                }
            }

            if (schedules.size === 0) {
                Reflect.deleteMetadata(SchedulingConstants.Scheduled, this);
            }
        }

        original.apply(this, args);
    };
};
