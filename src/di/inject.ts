import Application from './Application';

/**
 * Injects the decorated class with autowired dependencies when it is instantiated.
 * @description Dependency injection is similar to using the @service decorator except that classes decorated with @inject
 * are not singletons and are not instantiated automatically when the application starts. Instead, the developer can create instances
 * of classes decorated with @inject at any time and they will be injected with their appropriate autowired dependencies
 * @param {T} target The class to receive autowired dependencies
 * @returns {{new(...args: any[]): any, prototype: {}}} Wrapped class which injects autowired dependencies upon instantiation
 */
export default <T extends new(...args: any[]) => any>(target: T) => class extends target {
    public constructor(...args: any[]) {
        super(...args);
        Application.inject(this, target);
    }
};
