// tslint:disable:ban-types
import Reflect from '../Reflect';
import { ClientConstants } from './constants';

export interface IClientOptions {
    baseUrl(): string;
    interceptors?: (() => RequestInit)[];
}

export default (options: IClientOptions): ClassDecorator => <T extends Function>(target: T): T | void => {
    Reflect.defineMetadata(ClientConstants.ClientOptions, options, target.prototype);
};
