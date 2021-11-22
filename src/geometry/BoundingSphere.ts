/**
 * Created by Tanner on 4/18/2017.
 */

import Vector3 from './Vector3';

export default class BoundingSphere {
    public center: Vector3;
    public radius: number;

    constructor(center: Vector3, radius: number) {
        this.center = center;
        this.radius = radius;
    }

    public contains(v: Vector3): boolean {
        return Vector3.distanceSquared(this.center, v) < this.radius * this.radius;
    }
}
