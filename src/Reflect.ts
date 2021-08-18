// tslint:disable:ban-types

export default class Reflect {
    private static propertyMetadata = new Map<Object, Map<string | symbol, Map<string, any>>>();
    private static objectMetadata = new Map<Object, Map<string | symbol, any>>();

    public static getMetadata(metadataKey: any, target: Object, propertyKey?: string | symbol): any {
        if (propertyKey) {
            return Reflect.propertyMetadata.get(target)?.get(propertyKey)?.get(metadataKey);
        } else {
            return Reflect.objectMetadata.get(target)?.get(metadataKey);
        }
    }

    public static defineMetadata(metadataKey: any, metadataValue: any, target: Object, propertyKey?: string | symbol): void {
        if (propertyKey) {
            const targetMetadata = Reflect.propertyMetadata.get(target) ?? Reflect.propertyMetadata.set(target, new Map()).get(target);
            const propertyMetadata = targetMetadata.get(propertyKey) ?? targetMetadata.set(propertyKey, new Map()).get(propertyKey);
            propertyMetadata.set(metadataKey, metadataValue);
        } else {
            const targetMetadata = Reflect.objectMetadata.get(target) ?? Reflect.objectMetadata.set(target, new Map()).get(target);
            targetMetadata.set(metadataKey, metadataValue);
        }
    }

    public static hasMetadata(metadataKey: any, target: Object, propertyKey?: string | symbol): boolean {
        if (propertyKey) {
            return Reflect.propertyMetadata.has(target) && Reflect.propertyMetadata.get(target).has(propertyKey)
                && Reflect.propertyMetadata.get(target).get(propertyKey).has(metadataKey);
        } else {
            return Reflect.objectMetadata.has(target) && Reflect.objectMetadata.get(target).has(metadataKey);
        }
    }

    public static deleteMetadata(metadataKey: any, target: Object, propertyKey?: string | symbol): boolean {
        if (propertyKey) {
            if (Reflect.hasMetadata(metadataKey, target, propertyKey)) {
                Reflect.propertyMetadata.get(target).get(propertyKey).delete(metadataKey);
                return true;
            }
        } else {
            if (Reflect.hasMetadata(metadataKey, target)) {
                Reflect.objectMetadata.get(target).delete(metadataKey);
                return true;
            }
        }
        return false;
    }
}
