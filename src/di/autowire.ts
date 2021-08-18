// tslint:disable:ban-types
import Reflect from '../Reflect';
import { DiConstants } from './constants';

function autowire(name: string): any;
function autowire(target: Object, propertyKey: string | symbol): void;
function autowire(target: any, propertyKey?: string | symbol): PropertyDecorator | ParameterDecorator | void {
    if (typeof target === 'string') {
        const name = target;
        return (target: any, propertyKey: string | symbol, parameterIndex?: number) => {
            if (typeof parameterIndex === 'number') {
                // only parameter decorator will have parameterIndex
                const map: Map<string, number> = Reflect.getMetadata(DiConstants.AutowiredParams, target) ?? new Map();
                map.set(name, parameterIndex);
                Reflect.defineMetadata(DiConstants.AutowiredParams, map, target);
            } else {
                // otherwise this is a named property decorator
                const map: Map<string, string> = Reflect.getMetadata(DiConstants.AutowiredProps, target.constructor ?? target) ?? new Map();
                map.set(name, propertyKey as string);
                Reflect.defineMetadata(DiConstants.AutowiredProps, map, target.constructor ?? target);
            }
        };
    } else {
        // only property decorators can omit name
        const map: Map<string, string> = Reflect.getMetadata(DiConstants.AutowiredProps, target.constructor ?? target) ?? new Map();
        map.set(propertyKey as string, propertyKey as string);
        Reflect.defineMetadata(DiConstants.AutowiredProps, map, target.constructor ?? target);
    }
}

export default autowire;
