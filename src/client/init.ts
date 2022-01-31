import Reflect from '../Reflect';
import { ClientConstants } from './constants';

export default (target: any, propertyKey: string | symbol, parameterIndex: number) => {
    const initOptions: Set<number> = Reflect.getMetadata(ClientConstants.InitOptions, target, propertyKey) ?? new Set();
    initOptions.add(parameterIndex);
    Reflect.defineMetadata(ClientConstants.InitOptions, initOptions, target, propertyKey);
};
