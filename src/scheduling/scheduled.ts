import Reflect from '../Reflect';
import { SchedulingConstants } from './constants';
import { IIntervalOptions } from './interval';

type IScheduledOptions = Pick<IIntervalOptions, 'fixedRate' | 'fixedDelay' | 'initialDelay'>;

export default ({ fixedRate, fixedDelay, initialDelay }: IScheduledOptions): MethodDecorator => (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const callback = descriptor.value;
    const schedules: Map<string | symbol, IIntervalOptions> = Reflect.getMetadata(SchedulingConstants.Schedules, target.constructor) ?? new Map();
    schedules.set(propertyKey, { callback, fixedRate, fixedDelay, initialDelay });
    Reflect.defineMetadata(SchedulingConstants.Schedules, schedules, target.constructor);
};
