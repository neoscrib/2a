/**
 * Created by Tanner Jepsen on 4/16/2016.
 */

import Matrix from './Matrix';

/**
 * Defines a vector with three components.
 */
export default class Vector3 {
    /**
     * The x-component of the vector.
     */
    public x = 0;

    /**
     * The y-component of the vector.
     */
    public y = 0;

    /**
     * The z-component of the vector.
     */
    public z = 0;

    /**
     * Initializes a new instance of Vector3.
     * @param {number} x Initial value for the x-component of the vector.
     * @param {number} y Initial value for the y-component of the vector.
     * @param {number} z Initial value for the z-component of the vector.
     */
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /**
     * Returns a new instance of Vector3 using the x, y, z fields of the specified object.
     * @param o Object which contains x, y, and z fields.
     * @returns {Vector3} A vector containing the components from the spcified object.
     */
    public static fromObject(o: { x: number, y: number, z: number }): Vector3 {
        return new Vector3(o.x, o.y, o.z);
    }

    /**
     * Returns a unit Vector3 designating backward in a right-handed coordinate system (0, 0, 1).
     * @returns {Vector3} A unit Vector3 pointing backward.
     */
    static get backward(): Vector3 {
        return Vector3.unitZ;
    }

    /**
     * Returns a unit Vector3 designating down (0, -1, 0).
     * @returns {Vector3} A unit Vector3 pointing down.
     */
    static get down(): Vector3 {
        return new Vector3(0, -1, 0);
    }

    /**
     * Returns a unit Vector3 designating forward in a right-handed coordinate system(0, 0, -1).
     * @returns {Vector3} A unit Vector3 pointing forward.
     */
    static get forward(): Vector3 {
        return new Vector3(0, 0, -1);
    }

    /**
     * Returns a unit Vector3 designating left (-1, 0, 0).
     * @returns {Vector3} A unit Vector3 pointing left.
     */
    static get left(): Vector3 {
        return new Vector3(-1, 0, 0);
    }

    /**
     * Returns a Vector3 with ones in all of its components.
     * @returns {Vector3} A Vector3 with ones in all of its components.
     */
    static get one(): Vector3 {
        return new Vector3(1, 1, 1);
    }

    /**
     * Returns a unit Vector3 pointing to the right (1, 0, 0).
     * @returns {Vector3} A unit Vector3 pointing to the right.
     */
    static get right(): Vector3 {
        return Vector3.unitX;
    }

    /**
     * Returns the x unit Vector3 (1, 0, 0).
     * @returns {Vector3} Returns the x unit Vector3.
     */
    static get unitX(): Vector3 {
        return new Vector3(1, 0, 0);
    }

    /**
     * Returns the y unit Vector3 (0, 1, 0).
     * @returns {Vector3} Returns the y unit Vector3.
     */
    static get unitY(): Vector3 {
        return new Vector3(0, 1, 0);
    }

    /**
     * Returns the z unit Vector3 (0, 0, 1).
     * @returns {Vector3} Returns the z unit Vector3.
     */
    static get unitZ(): Vector3 {
        return new Vector3(0, 0, 1);
    }

    /**
     * Returns a unit vector designating up (0, 1, 0).
     * @returns {Vector3} A unit Vector3 pointing up.
     */
    static get up(): Vector3 {
        return Vector3.unitY;
    }

    /**
     * Returns a Vector3 with all of its components set to zero.
     * @returns {Vector3} A Vector3 with all of its components set to zero.
     */
    static get zero(): Vector3 {
        return new Vector3(0, 0, 0);
    }

    /**
     * Adds two vectors.
     * @param {Vector3} v2 Source vector.
     * @returns {Vector3} Sum of the source vectors.
     */
    public add(v2: Vector3): Vector3 {
        return Vector3.add(this, v2);
    }

    /**
     * Adds two vectors.
     * @param {Vector3} v1 Source vector.
     * @param {Vector3} v2 Source vector.
     * @returns {Vector3} Sum of the source vectors.
     */
    public static add(v1: Vector3, v2: Vector3): Vector3 {
        return new Vector3(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
    }

    /**
     * Returns a Vector3 containing the 3D Cartesian coordinates of a point specified in Barycentric coordinates relative to a 3D triangle.
     * @param {Vector3} v1 A Vector3 containing the 3D Cartesian coordinates of vertex 1 of the triangle.
     * @param {Vector3} v2 A Vector3 containing the 3D Cartesian coordinates of vertex 2 of the triangle.
     * @param {Vector3} v3 A Vector3 containing the 3D Cartesian coordinates of vertex 3 of the triangle.
     * @param {number} amount1 Barycentric coordinate b2, which expresses the weighting factor toward vertex 2 (specified in value2).
     * @param {number} amount2 Barycentric coordinate b3, which expresses the weighting factor toward vertex 3 (specified in value3).
     * @returns {Vector3} A new Vector3 containing the 3D Cartesian coordinates of the specified point.
     */
    public static barycentric(v1: Vector3, v2: Vector3, v3: Vector3, amount1: number, amount2: number): Vector3 {
        const px: number = ((1 - amount1 - amount2) * v1.x) + (amount1 * v2.x) + (amount2 * v3.x);
        const py: number = ((1 - amount1 - amount2) * v1.y) + (amount1 * v2.y) + (amount2 * v3.y);
        const pz: number = ((1 - amount1 - amount2) * v1.z) + (amount1 * v2.z) + (amount2 * v3.z);
        return new Vector3(px, py, pz);
    }

    /**
     * Performs a Catmull-Rom interpolation using the specified positions.
     * @param {Vector3} v1 The first position in the interpolation.
     * @param {Vector3} v2 The second position in the interpolation.
     * @param {Vector3} v3 The third position in the interpolation.
     * @param {Vector3} v4 The fourth position in the interpolation.
     * @param {number} amount Weighting factor.
     * @returns {Vector3} A vector that is the result of the Catmull-Rom interpolation.
     */
    public static catmullrom(v1: Vector3, v2: Vector3, v3: Vector3, v4: Vector3, amount: number): Vector3 {
        const a: number = amount * amount;
        const b: number = amount * a;
        return new Vector3(
            0.5 * (2 * v2.x + (-v1.x + v3.x) * amount + (2 * v1.x - 5 * v2.x + 4 * v3.x - v4.x) * a + (-v1.x + 3 * v2.x - 3 * v3.x + v4.x) * b),
            0.5 * (2 * v2.y + (-v1.y + v3.y) * amount + (2 * v1.y - 5 * v2.y + 4 * v3.y - v4.y) * a + (-v1.y + 3 * v2.y - 3 * v3.y + v4.y) * b),
            0.5 * (2 * v2.z + (-v1.z + v3.z) * amount + (2 * v1.z - 5 * v2.z + 4 * v3.z - v4.z) * a + (-v1.z + 3 * v2.z - 3 * v3.z + v4.z) * b)
        );
    }

    /**
     * Restricts a value to be within a specified range.
     * @param {Vector3} min The minimum value.
     * @param {Vector3} max The maximum value.
     * @returns {Vector3} The clamped value.
     */
    public clamp(min: Vector3, max: Vector3): Vector3 {
        return Vector3.clamp(this, min, max);
    }

    /**
     * Restricts a value to be within a specified range.
     * @param {Vector3} v1 The value to clamp.
     * @param {Vector3} min The minimum value.
     * @param {Vector3} max The maximum value.
     * @returns {Vector3} The clamped value.
     */
    public static clamp(v1: Vector3, min: Vector3, max: Vector3): Vector3 {
        return new Vector3(
            Math.max(Math.min(v1.x, max.x), min.x),
            Math.max(Math.min(v1.y, max.y), min.y),
            Math.max(Math.min(v1.z, max.z), min.z)
        );
    }

    /**
     * Calculates the cross product of two vectors.
     * @param {Vector3} v2 Source vector.
     * @returns {Vector3} Cross product of the source vectors.
     */
    public cross(v2: Vector3): Vector3 {
        return Vector3.cross(this, v2);
    }

    /**
     * Calculates the cross product of two vectors.
     * @param {Vector3} v1 Source vector.
     * @param {Vector3} v2 Source vector.
     * @returns {Vector3} Cross product of the source vectors.
     */
    public static cross(v1: Vector3, v2: Vector3): Vector3 {
        return new Vector3(
            v1.y * v2.z - v1.z * v2.y,
            v1.z * v2.x - v1.x * v2.z,
            v1.x * v2.y - v1.y * v2.x
        );
    }

    /**
     * Calculates the distance between two vectors.
     * @param {Vector3} v2 Source vector.
     * @returns {number} Distance between the source vectors.
     */
    public distance(v2: Vector3): number {
        return Vector3.distance(this, v2);
    }

    /**
     * Calculates the distance between two vectors.
     * @param {Vector3} v1 Source vector.
     * @param {Vector3} v2 Source vector.
     * @returns {number} Distance between the source vectors.
     */
    public static distance(v1: Vector3, v2: Vector3): number {
        return Math.sqrt(Vector3.distanceSquared(v1, v2));
    }

    /**
     * Calculates the distance between two vectors squared.
     * @param {Vector3} v2 Source vector.
     * @returns {number} The distance between the source vectors squared.
     */
    public distanceSquared(v2: Vector3): number {
        return Vector3.distanceSquared(this, v2);
    }

    /**
     * Calculates the distance between two vectors squared.
     * @param {Vector3} v1 Source vector.
     * @param {Vector3} v2 Source vector.
     * @returns {number} The distance between the source vectors squared.
     */
    public static distanceSquared(v1: Vector3, v2: Vector3): number {
        const v3: Vector3 = Vector3.subtract(v1, v2);
        return v3.lengthSquared();
    }

    /**
     * Divides the components of a vector by the components of another vector. Division of a vector by another vector is
     * not mathematically defined. This method simply divides each component of <i>a</i> by the matching component of
     * <i>b</i>.
     * @param {Vector3} v2 Divisor vector.
     * @returns {Vector3} The result of dividing the vectors.
     */
    public divide(v2: Vector3): Vector3 {
        return Vector3.divide(this, v2);
    }

    /**
     * Divides the components of a vector by the components of another vector. Division of a vector by another vector is
     * not mathematically defined. This method simply divides each component of <i>a</i> by the matching component of
     * <i>b</i>.
     * @param {Vector3} v1 Source vector.
     * @param {Vector3} v2 Divisor vector.
     * @returns {Vector3} The result of dividing the vectors.
     */
    public static divide(v1: Vector3, v2: Vector3): Vector3 {
        return new Vector3(
            v1.x / v2.x,
            v1.y / v2.y,
            v1.z / v2.z
        );
    }

    /**
     * Divides a vector by a scalar value.
     * @param {number} scalar The divisor.
     * @returns {Vector3} The source vector divided by b.
     */
    public divideScalar(scalar: number): Vector3 {
        return Vector3.divideScalar(this, scalar);
    }

    /**
     * Divides a vector by a scalar value.
     * @param {Vector3} v1 Source vector.
     * @param {number} scalar The divisor.
     * @returns {Vector3} The source vector divided by b.
     */
    public static divideScalar(v1: Vector3, scalar: number): Vector3 {
        return new Vector3(
            v1.x / scalar,
            v1.y / scalar,
            v1.z / scalar
        );
    }

    /**
     * Calculates the dot product of two vectors. If the two vectors are unit vectors, the dot product returns a
     * floating point value between -1 and 1 that can be used to determine some properties of the angle between two
     * vectors. For example, it can show whether the vectors are orthogonal, parallel, or have an acute or obtuse angle
     * between them.
     * @param {Vector3} v2 Source vector.
     * @returns {number} The dot product of the two vectors.
     */
    public dot(v2: Vector3): number {
        return Vector3.dot(this, v2);
    }

    /**
     * Calculates the dot product of two vectors. If the two vectors are unit vectors, the dot product returns a
     * floating point value between -1 and 1 that can be used to determine some properties of the angle between two
     * vectors. For example, it can show whether the vectors are orthogonal, parallel, or have an acute or obtuse angle
     * between them.
     * @param {Vector3} v1 Source vector.
     * @param {Vector3} v2 Source vector.
     * @returns {number} The dot product of the two vectors.
     */
    public static dot(v1: Vector3, v2: Vector3): number {
        return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
    }

    /**
     * Determines whether the specified Object is equal to the Vector3.
     * @param {Vector3} v2 The Vector3 to compare with the current Vector3.
     * @returns {boolean} <b>true</b> if the specified Vector3 is equal to the current Vector3; <b>false</b> otherwise.
     */
    public equals(v2: Vector3): boolean {
        return Vector3.equals(this, v2);
    }

    /**
     * Determines whether the specified Object is equal to the Vector3.
     * @param {Vector3} v1 Source vector.
     * @param {Vector3} v2 The Vector3 to compare with the current Vector3.
     * @returns {boolean} <b>true</b> if the specified Vector3 is equal to the current Vector3; <b>false</b> otherwise.
     */
    public static equals(v1: Vector3, v2: Vector3): boolean {
        return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z;
    }

    /**
     * Performs a Hermite spline interpolation.
     * @param {Vector3} v1 Source position vector.
     * @param {Vector3} t1 Source tangent vector.
     * @param {Vector3} v2 Source position vector.
     * @param {Vector3} t2 Source tangent vector.
     * @param {number} amount Weighting factor.
     * @returns {Vector3} The result of the Hermite spline interpolation.
     */
    public static hermite(v1: Vector3, t1: Vector3, v2: Vector3, t2: Vector3, amount: number): Vector3 {
        const a: number = amount * amount;
        const b: number = amount * a;
        const c: number = (2 * b - 3 * a + 1);
        const d: number = (-2 * b + 3 * a);
        const e: number = b - 2 * a + amount;
        const f: number = b - a;
        return new Vector3(
            v1.x * c + v2.x * d + t1.x * e + t2.x * f,
            v1.y * c + v2.y * d + t1.y * e + t2.y * f,
            v1.z * c + v2.z * d + t1.z * e + t2.z * f
        );
    }

    /**
     * Calculates the length of the vector.
     * @returns {number} The length of the vector.
     */
    public length1(): number {
        return Vector3.length1(this);
    }

    /**
     * Calculates the length of the vector.
     * @param {Vector3} v1 Source vector.
     * @returns {number} The length of the vector.
     */
    public static length1(v1: Vector3): number {
        return Math.sqrt(Vector3.lengthSquared(v1));
    }

    /**
     * Calculates the length of the vector squared.
     * @returns {number} The length of the vector squared.
     */
    public lengthSquared(): number {
        return Vector3.lengthSquared(this);
    }

    /**
     * Calculates the length of the vector squared.
     * @param {Vector3} v1 Source vector.
     * @returns {number} The length of the vector squared.
     */
    public static lengthSquared(v1: Vector3): number {
        return Vector3.dot(v1, v1);
    }

    /**
     * Performs a linear interpolation between two vectors.
     * @param {Vector3} v2 Source vector.
     * @param {number} amount Value between 0 and 1 indicating the weight of value2.
     * @returns {Vector3} The linear interpolation of the two vectors.
     */
    public lerp(v2: Vector3, amount: number): Vector3 {
        return Vector3.lerp(this, v2, amount);
    }

    /**
     * Performs a linear interpolation between two vectors.
     * @param {Vector3} v1 Source vector.
     * @param {Vector3} v2 Source vector.
     * @param {number} amount Value between 0 and 1 indicating the weight of value2.
     * @returns {Vector3} The linear interpolation of the two vectors.
     */
    public static lerp(v1: Vector3, v2: Vector3, amount: number): Vector3 {
        return new Vector3(
            v1.x + (v2.x - v1.x) * amount,
            v1.y + (v2.y - v1.y) * amount,
            v1.z + (v2.z - v1.z) * amount
        );
    }

    /**
     * Returns a vector that contains the highest value from each matching pair of components.
     * @param {Vector3} v2 Source vector.
     * @returns {Vector3} The maximized vector.
     */
    public max(v2: Vector3): Vector3 {
        return Vector3.max(this, v2);
    }

    /**
     * Returns a vector that contains the highest value from each matching pair of components.
     * @param {Vector3} v1 Source vector.
     * @param {Vector3} v2 Source vector.
     * @returns {Vector3} The maximized vector.
     */
    public static max(v1: Vector3, v2: Vector3): Vector3 {
        return new Vector3(
            Math.max(v1.x, v2.x),
            Math.max(v1.y, v2.y),
            Math.max(v1.z, v2.z)
        );
    }

    /**
     * Returns a vector that contains the lowest value from each matching pair of components.
     * @param {Vector3} v2 Source vector.
     * @returns {Vector3} The minimized vector.
     */
    public min(v2: Vector3): Vector3 {
        return Vector3.min(this, v2);
    }

    /**
     * Returns a vector that contains the lowest value from each matching pair of components.
     * @param {Vector3} v1 Source vector.
     * @param {Vector3} v2 Source vector.
     * @returns {Vector3} The minimized vector.
     */
    public static min(v1: Vector3, v2: Vector3): Vector3 {
        return new Vector3(
            Math.min(v1.x, v2.x),
            Math.min(v1.y, v2.y),
            Math.min(v1.z, v2.z)
        );
    }

    /**
     * Multiplies the components of two vectors by each other.
     * @param {Vector3} v2 Source vector.
     * @returns {Vector3} Result of the multiplication.
     */
    public multiply(v2: Vector3): Vector3 {
        return Vector3.multiply(this, v2);
    }

    /**
     * Multiplies the components of two vectors by each other.
     * @param {Vector3} v1 Source vector.
     * @param {Vector3} v2 Source vector.
     * @returns {Vector3} Result of the multiplication.
     */
    public static multiply(v1: Vector3, v2: Vector3): Vector3 {
        return new Vector3(
            v1.x * v2.x,
            v1.y * v2.y,
            v1.z * v2.z
        );
    }

    /**
     * Multiplies a vector by a scalar value.
     * @param {number} scalar Scalar value.
     * @returns {Vector3} Result of the multiplication.
     */
    public multiplyScalar(scalar: number): Vector3 {
        return Vector3.multiplyScalar(this, scalar);
    }

    /**
     * Multiplies a vector by a scalar value.
     * @param {Vector3} v1 Source vector.
     * @param {number} scalar Scalar value.
     * @returns {Vector3} Result of the multiplication.
     */
    public static multiplyScalar(v1: Vector3, scalar: number): Vector3 {
        return new Vector3(
            v1.x * scalar,
            v1.y * scalar,
            v1.z * scalar
        );
    }

    /**
     * Returns a vector pointing in the opposite direction.
     * @returns {Vector3} Vector pointing in the opposite direction.
     */
    public negate(): Vector3 {
        return Vector3.negate(this);
    }

    /**
     * Returns a vector pointing in the opposite direction.
     * @param {Vector3} v1 Source vector.
     * @returns {Vector3} Vector pointing in the opposite direction.
     */
    public static negate(v1: Vector3): Vector3 {
        return Vector3.multiplyScalar(v1, -1);
    }

    /**
     * Creates a unit vector from the specified vector. The result is a vector one unit in length pointing in
     * the same direction as the original vector.
     * @returns {Vector3} The created unit vector.
     */
    public normalize(): Vector3 {
        return Vector3.normalize(this);
    }

    /**
     * Creates a unit vector from the specified vector. The result is a vector one unit in length pointing in
     * the same direction as the original vector.
     * @param {Vector3} v1 The source Vector3.
     * @returns {Vector3} The created unit vector.
     */
    public static normalize(v1: Vector3): Vector3 {
        const a = 1 / Vector3.length1(v1);
        return Vector3.multiplyScalar(v1, a);
    }

    /**
     * Returns the reflection of a vector off a surface that has the specified normal.
     * @param {Vector3} normal Normal of the surface.
     * @returns {Vector3} The reflected vector.
     */
    public reflect(normal: Vector3): Vector3 {
        return Vector3.reflect(this, normal);
    }

    /**
     * Returns the reflection of a vector off a surface that has the specified normal.
     * @param {Vector3} vector Source vector.
     * @param {Vector3} normal Normal of the surface.
     * @returns {Vector3} The reflected vector.
     */
    public static reflect(vector: Vector3, normal: Vector3): Vector3 {
        const dot: number = Vector3.dot(vector, normal);
        return new Vector3(
            vector.x - 2 * dot * normal.x,
            vector.y - 2 * dot * normal.y,
            vector.z - 2 * dot * normal.z
        );
    }

    /**
     * Interpolates between two values using a cubic equation.
     * @param {Vector3} v2 Source value.
     * @param {number} amount Weighting value.
     * @returns {Vector3} Interpolated value.
     */
    public smoothStep(v2: Vector3, amount: number): Vector3 {
        return Vector3.smoothStep(this, v2, amount);
    }

    /**
     * Interpolates between two values using a cubic equation.
     * @param {Vector3} v1 Source value.
     * @param {Vector3} v2 Source value.
     * @param {number} amount Weighting value.
     * @returns {Vector3} Interpolated value.
     */
    public static smoothStep(v1: Vector3, v2: Vector3, amount: number): Vector3 {
        amount = amount > 1 ? 1 : (amount < 0 ? 0 : amount);
        amount = (amount * amount * (3 - 2 * amount));
        return Vector3.lerp(v1, v2, amount);
    }

    /**
     * Subtracts a vector from a vector.
     * @param {Vector3} v2 Source vector.
     * @returns {Vector3} Result of the subtraction.
     */
    public subtract(v2: Vector3): Vector3 {
        return Vector3.subtract(this, v2);
    }

    /**
     * Subtracts a vector from a vector.
     * @param {Vector3} v1 Source vector.
     * @param {Vector3} v2 Source vector.
     * @returns {Vector3} Result of the subtraction.
     */
    public static subtract(v1: Vector3, v2: Vector3): Vector3 {
        return new Vector3(
            v1.x - v2.x,
            v1.y - v2.y,
            v1.z - v2.z
        );
    }

    /**
     * Transforms a 3D vector by the given matrix.
     * @param {Matrix} matrix The transformation matrix.
     * @returns {Vector3} The transformed vector.
     */
    public transform(matrix: Matrix): Vector3 {
        return Vector3.transform(this, matrix);
    }

    /**
     * Transforms a 3D vector by the given matrix.
     * @param {Vector3} v1 The source vector.
     * @param {Matrix} matrix The transformation matrix.
     * @returns {Vector3} The transformed vector.
     */
    public static transform(v1: Vector3, matrix: Matrix): Vector3 {
        const m1 = Matrix.createTranslation(v1.x, v1.y, v1.z);
        const m2 = m1.multiply(matrix);
        return m2.translation;
    }

    public toJSON(): { x: number, y: number, z: number } {
        return {
            x: this.x,
            y: this.y,
            z: this.z
        };
    }
}
