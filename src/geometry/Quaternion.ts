/**
 * Created by Tanner Jepsen on 4/19/2016.
 */

import Matrix from './Matrix';
import Vector3 from './Vector3';

/**
 * Defines a four-dimensional vector (x,y,z,w), which is used to efficiently rotate an object about the (x, y, z) vector
 * by the angle theta, where w = cos(theta/2). Quaternions represent a rotation. Typically, they are used for smooth
 * interpolation between two angles, and for avoiding the gimbal lock problem that can occur with euler angles.
 */
export default class Quaternion {
    public x: number;
    public y: number;
    public z: number;
    public w: number;

    /**
     * Initializes a new instance of Quaternion.
     * @param {number} x The x-value of the quaternion.
     * @param {number} y The y-value of the quaternion.
     * @param {number} z The z-value of the quaternion.
     * @param {number} w The w-value of the quaternion.
     */
    constructor(x: number, y: number, z: number, w: number) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    /**
     * Returns a Quaternion representing no rotation.
     * @returns {Quaternion} A Quaternion representing no rotation.
     */
    static get identity(): Quaternion {
        return new Quaternion(0, 0, 0, 1);
    }

    /**
     * Determines whether the specified Quaternion is equal to the current Quaternion.
     * @param {Quaternion} q2 The Quaternion to compare with the current Quaternion.
     * @returns {boolean} <b>true</b> if the specified Object is equal to the current Quaternion; <b>false</b> otherwise.
     */
    public equals(q2: Quaternion): boolean {
        return this.x === q2.x && this.y === q2.y && this.z === q2.z && this.w === q2.w;
    }

    /**
     * Adds two Quaternions.
     * @param {Quaternion} q2 Quaternion to add.
     * @returns {Quaternion} Result of adding the Quaternions.
     */
    public add(q2: Quaternion): Quaternion {
        return Quaternion.add(this, q2);
    }

    /**
     * Adds two Quaternions.
     * @param {Quaternion} q1 Quaternion to add.
     * @param {Quaternion} q2 Quaternion to add.
     * @returns {Quaternion} Result of adding the Quaternions.
     */
    public static add(q1: Quaternion, q2: Quaternion): Quaternion {
        return new Quaternion(
            q1.x + q2.x,
            q1.y + q2.y,
            q1.z + q2.z,
            q1.w + q2.w
        );
    }

    /**
     * Subtracts a quaternion from another quaternion.
     * @param {Quaternion} q2 Source quaternion.
     * @returns {Quaternion} Result of the subtraction.
     */
    public subtract(q2: Quaternion): Quaternion {
        return Quaternion.subtract(this, q2);
    }

    /**
     * Subtracts a quaternion from another quaternion.
     * @param {Quaternion} q1 Source quaternion.
     * @param {Quaternion} q2 Source quaternion.
     * @returns {Quaternion} Result of the subtraction.
     */
    public static subtract(q1: Quaternion, q2: Quaternion): Quaternion {
        return new Quaternion(
            q1.x - q2.x,
            q1.y - q2.y,
            q1.z - q2.z,
            q1.w - q2.w
        );
    }

    /**
     * Multiplies two quaternions.
     * @param {Quaternion} q2 The quaternion on the right of the multiplication.
     * @returns {Quaternion} The result of the multiplication.
     */
    public multiply(q2: Quaternion): Quaternion {
        return Quaternion.multiply(this, q2);
    }

    /**
     * Multiplies two quaternions.
     * @param {Quaternion} q1 The quaternion on the left of the multiplication.
     * @param {Quaternion} q2 The quaternion on the right of the multiplication.
     * @returns {Quaternion} The result of the multiplication.
     */
    public static multiply(q1: Quaternion, q2: Quaternion): Quaternion {
        const a: number = (q1.y * q2.z - q1.z * q2.y);
        const b: number = (q1.z * q2.x - q1.x * q2.z);
        const c: number =  (q1.x * q2.y - q1.y * q2.x);
        const d: number =  (q1.x * q2.x + q1.y * q2.y + q1.z * q2.z);
        return new Quaternion(
            (q1.x * q2.w + q2.x * q1.w) + a,
            (q1.y * q2.w + q2.y * q1.w) + b,
            (q1.z * q2.w + q2.z * q1.w) + c,
            q1.w * q2.w - d
        );
    }

    /**
     * Multiplies a quaternion by a scalar value.
     * @param {number} scalar Scalar value.
     * @returns {Quaternion} The result of the multiplication.
     */
    public multiplyScalar(scalar: number): Quaternion {
        return Quaternion.multiplyScalar(this, scalar);
    }

    /**
     * Multiplies a quaternion by a scalar value.
     * @param {Quaternion} q1 Source quaternion.
     * @param {number} scalar Scalar value.
     * @returns {Quaternion} The result of the multiplication.
     */
    public static multiplyScalar(q1: Quaternion, scalar: number): Quaternion {
        return new Quaternion(
            q1.x * scalar,
            q1.y * scalar,
            q1.z * scalar,
            q1.w * scalar
        );
    }

    /**
     * Divides a Quaternion by another Quaternion.
     * @param {Quaternion} q2 The divisor.
     * @returns {Quaternion} Result of the division.
     */
    public divide(q2: Quaternion): Quaternion {
        return Quaternion.divide(this, q2);
    }

    /**
     * Divides a Quaternion by another Quaternion.
     * @param {Quaternion} q1 Source Quaternion.
     * @param {Quaternion} q2 The divisor.
     * @returns {Quaternion} Result of the division.
     */
    public static divide(q1: Quaternion, q2: Quaternion): Quaternion {
        const a: number = 1 /  (q2.x * q2.x + q2.y * q2.y + q2.z * q2.z + q2.w * q2.w);
        const b: number = -q2.x * a;
        const c: number = -q2.y * a;
        const d: number = -q2.z * a;
        const e: number = q2.w * a;
        const f: number = (q1.y * d - q1.z * c);
        const g: number = (q1.z * b - q1.x * d);
        const h: number = (q1.x * c - q1.y * b);
        const i: number = (q1.x * b + q1.y * c +  q1.z * d);
        return new Quaternion(
            (q1.x * e + b * q1.w) + f,
            (q1.y * e + c * q1.w) + g,
            (q1.z * e + d * q1.w) + h,
            q1.w * e - i
        );
    }

    /**
     * Calculates the length squared of a Quaternion.
     * @returns {number} The length squared of the Quaternion.
     */
    public lengthSquared(): number {
        return (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }

    /**
     * Calculates the length of a Quaternion.
     * @returns {number} The length of the Quaternion.
     */
    public length(): number {
        return Math.sqrt(this.lengthSquared());
    }

    /**
     * Divides each component of the quaternion by the length of the quaternion.
     */
    public normalize(): void {
        const a = 1 / this.length();
        this.x *= a;
        this.y *= a;
        this.z *= a;
        this.w *= a;
    }

    /**
     * Divides each component of the quaternion by the length of the quaternion.
     * @param {Quaternion} q1 Source quaternion.
     * @returns {Quaternion} Normalized quaternion.
     */
    public static normalize(q1: Quaternion): Quaternion {
        const a = 1 / q1.length();
        return Quaternion.multiplyScalar(q1, a);
    }

    /**
     * Transforms this Quaternion into its conjugate.
     */
    public conjugate(): void {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
    }

    /**
     * Returns the conjugate of a specified Quaternion.
     * @param {Quaternion} q1 The Quaternion of which to return the conjugate.
     * @returns {Quaternion} A new Quaternion that is the conjugate of the specified one.
     */
    public static conjugate(q1: Quaternion): Quaternion {
        return new Quaternion(-q1.x, -q1.y, -q1.z, q1.w);
    }

    /**
     * Returns the inverse of a Quaternion.
     * @returns {Quaternion} The inverse of the Quaternion.
     */
    public inverse(): Quaternion {
        return Quaternion.inverse(this);
    }

    /**
     * Returns the inverse of a Quaternion.
     * @param {Quaternion} q1 Source Quaternion.
     * @returns {Quaternion} The inverse of the Quaternion.
     */
    public static inverse(q1: Quaternion): Quaternion {
        const a = 1 / q1.lengthSquared();
        const q2 = Quaternion.multiplyScalar(q1, -a);
        q2.w = q1.w * a;
        return q2;
    }

    /**
     * Creates a Quaternion from a vector and an angle to rotate about the vector.
     * @param {Vector3} vector The vector to rotate around.
     * @param {number} angle The angle to rotate around the vector.
     * @returns {Quaternion} The created Quaternion.
     */
    public static createFromAxisAngle(vector: Vector3, angle: number): Quaternion {
        const a = angle * 0.5;
        const b = Math.sin(a);
        const c = Math.cos(a);
        return new Quaternion(
            vector.x * b,
            vector.y * b,
            vector.z * b,
            c
        );
    }

    /**
     * Creates a new Quaternion from specified yaw, pitch, and roll angles.
     * @param {number} yaw The yaw angle, in radians, around the y-axis.
     * @param {number} pitch The pitch angle, in radians, around the x-axis.
     * @param {number} roll The roll angle, in radians, around the z-axis.
     * @returns {Quaternion} A new Quaternion expressing the specified yaw, pitch, and roll angles.
     */
    public static createFromYawPitchRoll(yaw: number, pitch: number, roll: number): Quaternion {
        const a = roll * 0.5;
        const b = Math.sin(a);
        const c = Math.cos(a);
        const d = pitch * 0.5;
        const e = Math.sin(d);
        const f = Math.cos(d);
        const g = yaw * 0.5;
        const h = Math.sin(g);
        const i = Math.cos(g);
        return new Quaternion(
            (i * e * c) + (h * f * b),
            (h * f * c) - (i * e * b),
            (i * f * b) - (h * e * c),
            (i * f * c) + (h * e * b)
        );
    }

    /**
     * Creates a Quaternion from a rotation Matrix.
     * @param {Matrix} m The rotation Matrix to create the Quaternion from.
     * @returns {Quaternion} The created Quaternion.
     */
    public static createFromRotationMatrix(m: Matrix): Quaternion {
        const a: number = m.m11 + m.m22 + m.m33;
        const q: Quaternion = Quaternion.identity;
        if (a > 0) {
            const b: number = Math.sqrt(a + 1);
            const c: number = 0.5 / b;
            q.x = (m.m23 - m.m32) * c;
            q.y = (m.m31 - m.m13) * c;
            q.z = (m.m12 - m.m21) * c;
            q.w = b * 0.5;
        } else if (m.m11 >= m.m22 && m.m11 >= m.m33) {
            const b: number = Math.sqrt(1 + m.m11 - m.m22 - m.m33);
            const c: number = 0.5 / b;
            q.x = 0.5 * b;
            q.y = (m.m12 + m.m21) * c;
            q.z = (m.m13 + m.m31) * c;
            q.w = (m.m23 - m.m32) * c;
        } else if (m.m22 > m.m33) {
            const b: number = Math.sqrt(1 + m.m22 - m.m11 - m.m33);
            const c: number = 0.5 / b;
            q.x = (m.m21 + m.m12) * c;
            q.y = 0.5 * b;
            q.z = (m.m32 + m.m23) * c;
            q.w = (m.m31 - m.m13) * c;
        } else {
            const b: number = Math.sqrt(1 + m.m33 - m.m11 - m.m22);
            const c: number = 0.5 / b;
            q.x = (m.m31 + m.m13) * c;
            q.y = (m.m32 + m.m23) * c;
            q.z = 0.5 * b;
            q.w = (m.m12 - m.m21) * c;
        }
        return q;
    }

    /**
     * Calculates the dot product of two Quaternions.
     * @param {Quaternion} q1 Source Quaternion.
     * @param {Quaternion} q2 Source Quaternion.
     * @returns {number} Dot product of the Quaternions.
     */
    public static dot(q1: Quaternion, q2: Quaternion): number {
        return (q1.x * q2.x + q1.y * q2.y + q1.z * q2.z + q1.w * q2.w);
    }

    /**
     * Interpolates between two quaternions, using spherical linear interpolation.
     * @param {Quaternion} q1 Source quaternion.
     * @param {Quaternion} q2 Source quaternion.
     * @param {number} amount Value that indicates how far to interpolate between the quaternions.
     * @returns {Quaternion} Result of the interpolation.
     */
    public static slerp(q1: Quaternion, q2: Quaternion, amount: number): Quaternion {
        let dot = Quaternion.dot(q1, q2);
        const flag = dot < 0.0;
        if (flag) {
            dot = -dot;
        }
        let a;
        let b;
        if (dot > 0.999998986721039) {
            a = 1 - amount;
            b = flag ? -amount : amount;
        } else {
            const c = Math.acos(dot);
            const d = (1 / Math.sin(c));
            a = Math.sin((1 - amount) * c) * d;
            b = flag ? -Math.sin(amount * c) * d : Math.sin(amount * c) * d;
        }
        return new Quaternion(
            (a * q1.x + b * q2.x),
            (a * q1.y + b * q2.y),
            (a * q1.z + b * q2.z),
            (a * q1.w + b * q2.w)
        );
    }

    /**
     * Linearly interpolates between two quaternions.
     * @param {Quaternion} q1 Source quaternion.
     * @param {Quaternion} q2 Source quaternion.
     * @param {number} amount Value indicating how far to interpolate between the quaternions.
     * @returns {Quaternion} The resulting quaternion.
     */
    public static lerp(q1: Quaternion, q2: Quaternion, amount: number): Quaternion {
        const a = 1 - amount;
        const q = Quaternion.identity;
        if (Quaternion.dot(q1, q2) >= 0.0) {
            q.x = (a * q1.x + amount * q2.x);
            q.y = (a * q1.y + amount * q2.y);
            q.z = (a * q1.z + amount * q2.z);
            q.w = (a * q1.w + amount * q2.w);
        } else {
            q.x = (a * q1.x - amount * q2.x);
            q.y = (a * q1.y - amount * q2.y);
            q.z = (a * q1.z - amount * q2.z);
            q.w = (a * q1.w - amount * q2.w);
        }
        q.normalize();
        return q;
    }

    /**
     * Concatenates two Quaternions; the result represents the first rotation followed by the second rotation.
     * @param {Quaternion} q1 The first Quaternion rotation in the series.
     * @param {Quaternion} q2 The second Quaternion rotation in the series.
     * @returns {Quaternion} A new Quaternion representing the concatenation of the <i>value1</i> rotation followed by
     * the <i>value2</i> rotation.
     */
    public static concatenate(q1: Quaternion, q2: Quaternion): Quaternion {
        const a = (q2.y * q1.z - q2.z * q1.y);
        const b = (q2.z * q1.x - q2.x * q1.z);
        const c = (q2.x * q1.y - q2.y * q1.x);
        const d = (q2.x * q1.x + q2.y * q1.y + q2.z * q1.z);
        return new Quaternion(
            (q2.x * q1.w + q1.x * q2.w) + a,
            (q2.y * q1.w + q1.y * q2.w) + b,
            (q2.z * q1.w + q1.z * q2.w) + c,
            q2.w * q1.w - d
        );
    }

    /**
     * Flips the sign of each component of the quaternion.
     * @param {Quaternion} q1 Source quaternion.
     * @returns {Quaternion} Negated quaternion.
     */
    public static negate(q1: Quaternion): Quaternion {
        return Quaternion.multiplyScalar(q1, -1);
    }
}
