import Reflect from '../Reflect';
import { ClientConstants } from './constants';

export interface IQueryParamOptions {
    name: string;
    required?: boolean;
}

export default (options: string | IQueryParamOptions) => (target: any, propertyKey: string | symbol, parameterIndex: number) => {
    const queryParams: Map<number, string | IQueryParamOptions> = Reflect.getMetadata(ClientConstants.QueryParams, target, propertyKey) ?? new Map();
    queryParams.set(parameterIndex, options);
    Reflect.defineMetadata(ClientConstants.QueryParams, queryParams, target, propertyKey);
};
