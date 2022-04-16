// tslint:disable:ban-types
import Reflect from '../Reflect';
import { ClientConstants } from './constants';

import CustomFetchResponse = twoa.client.CustomFetchResponse;

export interface IClientOptions {
    baseUrl(): string;
    interceptors?: (() => RequestInit)[];
    before?(init: RequestInit, id: string): void;
    after?(response: Response | CustomFetchResponse<any> | Error, id: string): void;
    fetch?<T>(input: RequestInfo, init?: RequestInit): Promise<CustomFetchResponse<T>>;
    cache?: string;
}

export default (options: IClientOptions): ClassDecorator => <T extends Function>(target: T): T | void => {
    Reflect.defineMetadata(ClientConstants.ClientOptions, options, target.prototype);
};
