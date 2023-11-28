import Reflect from '../Reflect';
import { ClientConstants } from './constants';

export default (target: any, propertyKey: string | symbol   , parameterIndex: number) =>
{
    const bodyParams: Set<number> = Reflect.getMetadata(ClientConstants.BodyParams, target, propertyKey) ?? new Set();
    bodyParams.add(parameterIndex);
    Reflect.defineMetadata(ClientConstants.BodyParams, bodyParams, target, propertyKey);
};
