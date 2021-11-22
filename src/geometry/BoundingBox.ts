/**
 * Created by Tanner Jepsen on 12/8/2016.
 */

import Vector3 from './Vector3';
import ContainmentType = twoa.geometry.ContainmentType;

/**
 * Defines an axis-aligned box-shaped 3D volume.
 */
export default class BoundingBox {
    /**
     * Indicates the extent to which bounding volumes intersect or contain one another.
     * @type {{disjoint: number, contains: number, intersects: number}}
     */
    public static ContainmentType = {
        /**
         * Indicates there is no overlap between the bounding volumes.
         */
        disjoint: 0,
        /**
         * Indicates that one bounding volume completely contains the other.
         */
        contains: 1,
        /**
         * Indicates that the bounding volumes partially overlap.
         */
        intersects: 2
    };

    public min: Vector3;
    public max: Vector3;

    /**
     * Creates an instance of BoundingBox
     * @param min {Vector3} The minimum point the BoundingBox includes.
     * @param max {Vector3} The maximum point the BoundingBox includes.
     */
    constructor(min: Vector3, max: Vector3) {
        this.min = min;
        this.max = max;
    }

    /**
     * Gets an array of points that make up the corners of the BoundingBox.
     * @returns {[Vector3,Vector3,Vector3,Vector3,Vector3,Vector3,Vector3,Vector3]} An array of Vector3 points that
     * represent the corners of the BoundingBox.
     */
    public getCorners(): [Vector3, Vector3, Vector3, Vector3, Vector3, Vector3, Vector3, Vector3] {
        const min: Vector3 = Vector3.min(this.min, this.max);
        const max: Vector3 = Vector3.max(this.min, this.max);
        return [
            new Vector3(min.x, max.y, max.z),
            new Vector3(max.x, max.y, max.z),
            new Vector3(max.x, min.y, max.z),
            new Vector3(min.x, min.y, max.z),
            new Vector3(min.x, max.y, min.z),
            new Vector3(max.x, max.y, min.z),
            new Vector3(max.x, min.y, min.z),
            new Vector3(min.x, min.y, min.z)
        ];
    }

    /**
     * Gets an array of points that make up the corners of the Plane aligned to the xy-axis.
     * @returns {[Vector3,Vector3,Vector3,Vector3]} An array of Vector3 points that represent the corners of the Plane aligned to the xy-axis.
     */
    public getCornersXY(): [Vector3, Vector3, Vector3, Vector3] {
        const min: Vector3 = Vector3.min(this.min, this.max);
        const max: Vector3 = Vector3.max(this.min, this.max);
        return [
            new Vector3(min.x, max.y, 0),
            new Vector3(max.x, max.y, 0),
            new Vector3(max.x, min.y, 0),
            new Vector3(min.x, min.y, 0)
        ];
    }

    /**
     * Checks whether the current BoundingBox intersects another BoundingBox.
     * @param box {BoundingBox} The BoundingBox to check for intersection with.
     * @returns {boolean} <b>true</b> if the BoundingBoxs intersect; <b>false</b> otherwise.
     */
    public intersects(box: BoundingBox): boolean {
        const min: Vector3 = Vector3.min(this.min, this.max);
        const max: Vector3 = Vector3.max(this.min, this.max);
        const minB: Vector3 = Vector3.min(box.min, box.max);
        const maxB: Vector3 = Vector3.max(box.min, box.max);
        return (max.x >=  minB.x && min.x <= maxB.x) &&
            (max.y >=  minB.y && min.y <= maxB.y) &&
            (max.z >=  minB.z && min.z <= maxB.z);
    }

    /**
     * Tests whether the BoundingBox contains another BoundingBox.
     * @param box {BoundingBox} The BoundingBox to test for overlap.
     * @returns {number} Enumeration indicating the extent of overlap.
     */
    public containsBox(box: BoundingBox): ContainmentType {
        const min: Vector3 = Vector3.min(this.min, this.max);
        const max: Vector3 = Vector3.max(this.min, this.max);
        const minB: Vector3 = Vector3.min(box.min, box.max);
        const maxB: Vector3 = Vector3.max(box.min, box.max);
        if ((max.x < minB.x || min.x > maxB.x) ||
            (max.y < minB.y || min.y > maxB.y) ||
            (max.z < minB.z || min.z > maxB.z)) {
            return BoundingBox.ContainmentType.disjoint as ContainmentType;
        }
        return ((min.x > minB.x || maxB.x > max.x) ||
        (min.y > minB.y || maxB.y > max.y) ||
        (min.z > minB.z || maxB.z > max.z) ?
            BoundingBox.ContainmentType.intersects :
            BoundingBox.ContainmentType.contains) as ContainmentType;
    }

    /**
     * Tests whether the BoundingBox contains a point.
     * @param point {Vector3} The point to test for overlap.
     * @returns {number} Enumeration indicating the extent of overlap.
     */
    public containsPoint(point: Vector3): ContainmentType {
        const min: Vector3 = Vector3.min(this.min, this.max);
        const max: Vector3 = Vector3.max(this.min, this.max);
        return ((min.x > point.x || point.x > max.x) ||
        (min.y > point.y || point.y > max.y) ||
        (min.z > point.z || point.z > max.z) ?
            BoundingBox.ContainmentType.disjoint :
            BoundingBox.ContainmentType.contains) as ContainmentType;
    }

    /**
     * Grows the BoundingBox from the center by the specified Vector3 amount.
     * @param amount {Vector3} The amount to grow the BoundingBox.
     */
    public grow(amount: Vector3): void {
        const half: Vector3 = Vector3.multiplyScalar(amount, 0.5);
        const min: Vector3 = Vector3.min(this.min, this.max);
        const max: Vector3 = Vector3.max(this.min, this.max);
        this.min = min.subtract(half);
        this.max = max.add(half);
    }

    /**
     * Creates the smallest BoundingBox that contains the two specified BoundingBox instances.
     * @param original {BoundingBox} One of the BoundingBoxs to contain.
     * @param additional {BoundingBox} One of the BoundingBoxs to contain.
     * @returns {BoundingBox} The created BoundingBox.
     */
    public static createMerged(original: BoundingBox, additional: BoundingBox): BoundingBox {
        return new BoundingBox(Vector3.min(original.min, additional.min), Vector3.max(original.max, additional.max));
    }

    /**
     * Creates the smallest BoundingBox that will contain a group of points.
     * @param points {Array.Vector3} A list of points the BoundingBox should contain.
     * @returns {BoundingBox} The created BoundingBox.
     */
    public static createFromPoints(points: Vector3[]): BoundingBox {
        let min: Vector3 = new Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        let max: Vector3 = new Vector3(Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE);
        points.forEach(p => {
            min = Vector3.min(min, p);
            max = Vector3.max(max, p);
        });
        return new BoundingBox(min, max);
    }
}
