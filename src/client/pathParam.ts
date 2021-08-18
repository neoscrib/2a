import Reflect from '../Reflect';
import { ClientConstants } from './constants';

export default (name: string) => (target: any, propertyKey: string | symbol, parameterIndex: number) => {
    const pathParams: Map<number, string | symbol> = Reflect.getMetadata(ClientConstants.PathParams, target, propertyKey) ?? new Map();
    pathParams.set(parameterIndex, name);
    Reflect.defineMetadata(ClientConstants.PathParams, pathParams, target, propertyKey);
};
