import Reflect from '../Reflect';
import Application from './Application';
import { DiConstants } from './constants';

export default (name: string) => <T extends new(...args: any[]) => any>(target: T) => {
    const targets = Application.getTargetsInternal();
    if (targets.has(name)) {
        throw new Error(`A dependency already exists with the same name: ${name}.`);
    } else {
        targets.set(name, target);
    }
    Reflect.defineMetadata(DiConstants.Targets, targets, Application);
};
