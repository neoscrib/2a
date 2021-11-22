import Reflect from '../Reflect';
import { ClientConstants } from './constants';

export default (name: string) => (target: any, propertyKey: string | symbol, parameterIndex: number) => {
    const formParams: Map<number, string | symbol> = Reflect.getMetadata(ClientConstants.FormParams, target, propertyKey) ?? new Map();
    formParams.set(parameterIndex, name);
    Reflect.defineMetadata(ClientConstants.FormParams, formParams, target, propertyKey);
};
