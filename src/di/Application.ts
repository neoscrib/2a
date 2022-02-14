import Reflect from '../Reflect';
import TopologicalSort from '../TopologicalSort';
import { DiConstants } from './constants';

export default class Application {
    /**
     * Performs service instantiation and dependency injection
     */
    public static run() {
        const targets = Application.getTargetsInternal();
        const topology = TopologicalSort.sort([ ...targets.entries() ].map(([ name, target ]) => {
            const dependencyIndexMap: Map<string, number> = Reflect.getMetadata(DiConstants.AutowiredParams, target) ?? new Map();
            const dependencyPropsMap: Map<string, string> = Reflect.getMetadata(DiConstants.AutowiredProps, target) ?? new Map();
            const params = [ ...dependencyIndexMap.entries() ]
                .sort(([ , a ], [ , b ]) => a - b)
                .map(([ dependency, n ], index) => {
                    if (n !== index) {
                        throw new Error('All constructor parameters within a service must be autowired.');
                    }
                    if (!targets.has(dependency)) {
                        throw new Error(`Unknown service: ${dependency}`);
                    }
                    return dependency;
                });
            const props = [ ...dependencyPropsMap.entries() ]
                .map(([ dependency, prop ]) => {
                    if (!targets.has(dependency)) {
                        throw new Error(`Unknown service: ${dependency}`);
                    }
                    return { dependency, prop };
                });

            return { name, params, props };
        }), item => item.name, ({ params, props }) => [ ...params, ...props.map(({ dependency }) => dependency) ]);

        console.debug('service topology', topology.map(({ name, params, props }) => ({ name, dependencies: [ ...params, ...props.map(({ dependency }) => dependency) ] })));

        const services = new Map<string, any>();
        for (const item of topology) {
            const autowired = item.params.map(key => services.get(key));
            const type = targets.get(item.name);
            const instance = new type(...autowired);

            item.props.forEach(({ dependency, prop }) => instance[prop] = services.get(dependency));

            services.set(item.name, instance);
        }

        Reflect.defineMetadata(DiConstants.Services, services, Application);
    }

    public static getTargetsInternal(): Map<string, new(...args: any[]) => any> {
        return Reflect.getMetadata(DiConstants.Targets, Application) ?? new Map();
    }

    public static getTargets(): ReadonlyMap<string, new(...args: any[]) => any> {
        return new Map(Application.getTargetsInternal());
    }

    public static getServicesInternal(): Map<string, any> {
        return Reflect.getMetadata(DiConstants.Services, Application) ?? new Map();
    }

    public static getServices(): ReadonlyMap<string, any> {
        return new Map(Application.getServicesInternal());
    }

    public static getService<T>(name: string): T {
        return Application.getServicesInternal().get(name);
    }

    public static registerService<T>(name: string, target: T) {
        const map = Reflect.getMetadata(DiConstants.Services, Application);
        map.set(name, target);
        Reflect.defineMetadata(DiConstants.Services, map, Application);
    }

    public static inject(instance: any, target: any): void {
        const dependencyPropsMap: Map<string, string> = Reflect.getMetadata(DiConstants.AutowiredProps, target) ?? new Map();
        const props = [ ...dependencyPropsMap.entries() ]
            .map(([ dependency, prop ]) => {
                if (!Application.getTargetsInternal().has(dependency)) {
                    throw new Error(`Unknown service: ${dependency}`);
                }
                return { dependency, prop };
            });
        props.forEach(({ dependency, prop }) => instance[prop] = Application.getService(dependency));
    }
}
