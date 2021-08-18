import Reflect from '../Reflect';
import { ClientConstants } from './constants';

export default (name: string) => (target: any, propertyKey: string | symbol, parameterIndex: number) => {
    const queryParams: Map<number, string | symbol> = Reflect.getMetadata(ClientConstants.HeaderParams, target, propertyKey) ?? new Map();
    queryParams.set(parameterIndex, name);
    Reflect.defineMetadata(ClientConstants.HeaderParams, queryParams, target, propertyKey);
};
