/**
 * Created by Tanner Jepsen on 4/18/2016.
 */

import Quaternion from './Quaternion';
import Vector3 from './Vector3';

/**
 * Defines a matrix.
 */
export default class Matrix {
    // tslint:disable-next-line:variable-name
    private _matrix: number[][];

    /**
     * Initializes a new instance of Matrix.
     * @param {number} m11 Value to initialize <i>m11</i> to.
     * @param {number} m12 Value to initialize <i>m12</i> to.
     * @param {number} m13 Value to initialize <i>m13</i> to.
     * @param {number} m14 Value to initialize <i>m14</i> to.
     * @param {number} m21 Value to initialize <i>m21</i> to.
     * @param {number} m22 Value to initialize <i>m22</i> to.
     * @param {number} m23 Value to initialize <i>m23</i> to.
     * @param {number} m24 Value to initialize <i>m24</i> to.
     * @param {number} m31 Value to initialize <i>m31</i> to.
     * @param {number} m32 Value to initialize <i>m32</i> to.
     * @param {number} m33 Value to initialize <i>m33</i> to.
     * @param {number} m34 Value to initialize <i>m34</i> to.
     * @param {number} m41 Value to initialize <i>m41</i> to.
     * @param {number} m42 Value to initialize <i>m42</i> to.
     * @param {number} m43 Value to initialize <i>m43</i> to.
     * @param {number} m44 Value to initialize <i>m44</i> to.
     */
    constructor(m11: number, m12: number, m13: number, m14: number,
                m21: number, m22: number, m23: number, m24: number,
                m31: number, m32: number, m33: number, m34: number,
                m41: number, m42: number, m43: number, m44: number) {
        this.matrix = [
            [ m11, m12, m13, m14 ],
            [ m21, m22, m23, m24 ],
            [ m31, m32, m33, m34 ],
            [ m41, m42, m43, m44 ]
        ];
    }

    /**
     * Gets the 4x4 array of the matrix values.
     * @returns {Array} The 4x4 array of the matrix values.
     */
    get matrix(): number[][] {
        return this._matrix;
    }

    /**
     * Sets the 4x4 array of the matrix values.
     * @param {Array} value The 4x4 array of the matrix values.
     */
    set matrix(value: number[][]) {
        this._matrix = value;
    }

    /**
     * Gets the value at row 1 column 1 of the matrix.
     * @returns {number} The value at row 1 column 1 of the matrix.
     */
    get m11(): number {
        return this.matrix[0][0];
    }

    /**
     * Sets the value at row 1 column 1 of the matrix.
     * @param {number} value The value at row 1 column 1 of the matrix.
     */
    set m11(value: number) {
        this.matrix[0][0] = value;
    }

    /**
     * Gets the value at row 1 column 2 of the matrix.
     * @returns {number} The value at row 1 column 2 of the matrix.
     */
    get m12(): number {
        return this.matrix[0][1];
    }

    /**
     * Sets the value at row 1 column 2 of the matrix.
     * @param {number} value The value at row 1 column 2 of the matrix.
     */
    set m12(value: number) {
        this.matrix[0][1] = value;
    }

    /**
     * Gets the value at row 1 column 3 of the matrix.
     * @returns {number} The value at row 1 column 3 of the matrix.
     */
    get m13(): number {
        return this.matrix[0][2];
    }

    /**
     * Sets the value at row 1 column 3 of the matrix.
     * @param {number} value The value at row 1 column 3 of the matrix.
     */
    set m13(value: number) {
        this.matrix[0][2] = value;
    }

    /**
     * Gets the value at row 1 column 4 of the matrix.
     * @returns {number} The value at row 1 column 4 of the matrix.
     */
    get m14(): number {
        return this.matrix[0][3];
    }

    /**
     * Sets the value at row 1 column 4 of the matrix.
     * @param {number} value The value at row 1 column 4 of the matrix.
     */
    set m14(value: number) {
        this.matrix[0][3] = value;
    }

    /**
     * Gets the value at row 2 column 1 of the matrix.
     * @returns {number} The value at row 2 column 1 of the matrix.
     */
    get m21(): number {
        return this.matrix[1][0];
    }

    /**
     * Sets the value at row 2 column 1 of the matrix.
     * @param {number} value The value at row 2 column 1 of the matrix.
     */
    set m21(value: number) {
        this.matrix[1][0] = value;
    }

    /**
     * Gets the value at row 2 column 2 of the matrix.
     * @returns {number} The value at row 2 column 2 of the matrix.
     */
    get m22(): number {
        return this.matrix[1][1];
    }

    /**
     * Sets the value at row 2 column 2 of the matrix.
     * @param {number} value The value at row 2 column 2 of the matrix.
     */
    set m22(value: number) {
        this.matrix[1][1] = value;
    }

    /**
     * Gets the value at row 2 column 3 of the matrix.
     * @returns {number} The value at row 2 column 3 of the matrix.
     */
    get m23(): number {
        return this.matrix[1][2];
    }

    /**
     * Sets the value at row 2 column 3 of the matrix.
     * @param {number} value The value at row 2 column 3 of the matrix.
     */
    set m23(value: number) {
        this.matrix[1][2] = value;
    }

    /**
     * Gets the value at row 2 column 4 of the matrix.
     * @returns {number} The value at row 2 column 4 of the matrix.
     */
    get m24(): number {
        return this.matrix[1][3];
    }

    /**
     * Sets the value at row 2 column 4 of the matrix.
     * @param {number} value The value at row 2 column 4 of the matrix.
     */
    set m24(value: number) {
        this.matrix[1][3] = value;
    }

    /**
     * Gets the value at row 3 column 1 of the matrix.
     * @returns {number} The value at row 3 column 1 of the matrix.
     */
    get m31(): number {
        return this.matrix[2][0];
    }

    /**
     * Sets the value at row 3 column 1 of the matrix.
     * @param {number} value The value at row 3 column 1 of the matrix.
     */
    set m31(value: number) {
        this.matrix[2][0] = value;
    }

    /**
     * Gets the value at row 3 column 2 of the matrix.
     * @returns {number} The value at row 3 column 2 of the matrix.
     */
    get m32(): number {
        return this.matrix[2][1];
    }

    /**
     * Sets the value at row 3 column 2 of the matrix.
     * @param {number} value The value at row 3 column 2 of the matrix.
     */
    set m32(value: number) {
        this.matrix[2][1] = value;
    }

    /**
     * Gets the value at row 3 column 3 of the matrix.
     * @returns {number} The value at row 3 column 3 of the matrix.
     */
    get m33(): number {
        return this.matrix[2][2];
    }

    /**
     * Sets the value at row 3 column 3 of the matrix.
     * @param {number} value The value at row 3 column 3 of the matrix.
     */
    set m33(value: number) {
        this.matrix[2][2] = value;
    }

    /**
     * Gets the value at row 3 column 4 of the matrix.
     * @returns {number} The value at row 3 column 4 of the matrix.
     */
    get m34(): number {
        return this.matrix[2][3];
    }

    /**
     * Sets the value at row 3 column 4 of the matrix.
     * @param {number} value The value at row 3 column 4 of the matrix.
     */
    set m34(value: number) {
        this.matrix[2][2] = value;
    }

    /**
     * Gets the value at row 4 column 1 of the matrix.
     * @returns {number} The value at row 4 column 1 of the matrix.
     */
    get m41(): number {
        return this.matrix[3][0];
    }

    /**
     * Sets the value at row 4 column 1 of the matrix.
     * @param {number} value The value at row 4 column 1 of the matrix.
     */
    set m41(value: number) {
        this.matrix[3][0] = value;
    }

    /**
     * Gets the value at row 4 column 2 of the matrix.
     * @returns {number} The value at row 4 column 2 of the matrix.
     */
    get m42(): number {
        return this.matrix[3][1];
    }

    /**
     * Sets the value at row 4 column 2 of the matrix.
     * @param {number} value The value at row 4 column 2 of the matrix.
     */
    set m42(value: number) {
        this.matrix[3][1] = value;
    }

    /**
     * Gets the value at row 4 column 3 of the matrix.
     * @returns {number} The value at row 4 column 3 of the matrix.
     */
    get m43(): number {
        return this.matrix[3][2];
    }

    /**
     * Sets the value at row 4 column 3 of the matrix.
     * @param {number} value The value at row 4 column 3 of the matrix.
     */
    set m43(value: number) {
        this.matrix[3][2] = value;
    }

    /**
     * Gets the value at row 4 column 4 of the matrix.
     * @returns {number} The value at row 4 column 4 of the matrix.
     */
    get m44(): number {
        return this.matrix[3][3];
    }

    /**
     * Sets the value at row 4 column 4 of the matrix.
     * @param {number} value The value at row 4 column 4 of the matrix.
     */
    set m44(value: number) {
        this.matrix[3][3] = value;
    }

    /**
     * Gets the backward vector of the Matrix.
     * @returns {Vector3} The backward vector of the Matrix.
     */
    get backward(): Vector3 {
        return new Vector3(this.m31, this.m32, this.m33);
    }

    /**
     * Sets the backward vector of the Matrix.
     * @param {Vector3} value The backward vector of the Matrix.
     */
    set backward(value: Vector3) {
        this.m31 = value.x;
        this.m32 = value.y;
        this.m33 = value.z;
    }

    /**
     * Gets the down vector of the Matrix.
     * @returns {Vector3} The down vector of the Matrix.
     */
    get down(): Vector3 {
        return new Vector3(-this.m21, -this.m22, -this.m23);
    }

    /**
     * Sets the down vector of the Matrix.
     * @param {Vector3} value The down vector of the Matrix.
     */
    set down(value: Vector3) {
        this.m21 = -value.x;
        this.m22 = -value.y;
        this.m23 = -value.z;
    }

    /**
     * Gets the forward vector of the Matrix.
     * @returns {Vector3} The forward vector of the Matrix.
     */
    get forward(): Vector3 {
        return new Vector3(-this.m31, -this.m32, -this.m33);
    }

    /**
     * Sets the forward vector of the Matrix.
     * @param {Vector3} value The forward vector of the Matrix.
     */
    set forward(value: Vector3) {
        this.m31 = -value.x;
        this.m32 = -value.y;
        this.m33 = -value.z;
    }

    /**
     * Gets the left vector of the Matrix.
     * @returns {Vector3} The left vector of the Matrix.
     */
    get left(): Vector3 {
        return new Vector3(-this.m11, -this.m12, -this.m13);
    }

    /**
     * Sets the left vector of the Matrix.
     * @param {Vector3} value The left vector of the Matrix.
     */
    set left(value: Vector3) {
        this.m11 = -value.x;
        this.m12 = -value.y;
        this.m13 = -value.z;
    }

    /**
     * Gets the right vector of the Matrix.
     * @returns {Vector3} The right vector of the Matrix.
     */
    get right(): Vector3 {
        return new Vector3(this.m11, this.m12, this.m13);
    }

    /**
     * Sets the right vector of the Matrix.
     * @param {Vector3} value The right vector of the Matrix.
     */
    set right(value: Vector3) {
        this.m11 = value.x;
        this.m12 = value.y;
        this.m13 = value.z;
    }

    /**
     * Gets the translation vector of the Matrix.
     * @returns {Vector3} The translation vector of the Matrix.
     */
    get translation(): Vector3 {
        return new Vector3(this.m41, this.m42, this.m43);
    }

    /**
     * Sets the translation vector of the Matrix.
     * @param {Vector3} value The translation vector of the Matrix.
     */
    set translation(value: Vector3) {
        this.m41 = value.x;
        this.m42 = value.y;
        this.m43 = value.z;
    }

    /**
     * Gets the up vector of the Matrix.
     * @returns {Vector3} The up vector of the Matrix.
     */
    get up(): Vector3 {
        return new Vector3(this.m21, this.m22, this.m23);
    }

    /**
     * Sets the up vector of the Matrix.
     * @param {Vector3} value The up vector of the Matrix.
     */
    set up(value: Vector3) {
        this.m21 = value.x;
        this.m22 = value.y;
        this.m23 = value.z;
    }

    /**
     * Returns an instance of the identity matrix.
     * @returns {Matrix} The identity matrix.
     */
    static get identity(): Matrix {
        return new Matrix(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        );
    }

    /**
     * Adds a matrix to another matrix.
     * @param {Matrix} matrix Source matrix.
     * @returns {Matrix} Resulting matrix.
     */
    public add(matrix: Matrix): Matrix {
        return Matrix.add(this, matrix);
    }

    /**
     * Adds a matrix to another matrix.
     * @param {Matrix} matrix1 Source matrix.
     * @param {Matrix} matrix2 Source matrix.
     * @returns {Matrix} Resulting matrix.
     */
    public static add(matrix1: Matrix, matrix2: Matrix): Matrix {
        const a = matrix1;
        const b = matrix2;
        const c = Matrix.identity;
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                c.matrix[x][y] = a.matrix[x][y] + b.matrix[x][y];
            }
        }
        return c;
    }

    public decompose(): { success: boolean, scale: Vector3, rotation: Quaternion, translation: Vector3 } {
        const translation: Vector3 = new Vector3(this.m41, this.m42, this.m43);

        const xs: number = (Math.sign(this.m11 * this.m12 * this.m13 * this.m14) < 0) ? -1 : 1;
        const ys: number = (Math.sign(this.m21 * this.m22 * this.m23 * this.m24) < 0) ? -1 : 1;
        const zs: number = (Math.sign(this.m31 * this.m32 * this.m33 * this.m34) < 0) ? -1 : 1;

        const scale: Vector3 = new Vector3(
            xs * Math.sqrt(this.m11 * this.m11 + this.m12 * this.m12 + this.m13 * this.m13),
            ys * Math.sqrt(this.m21 * this.m21 + this.m22 * this.m22 + this.m23 * this.m23),
            zs * Math.sqrt(this.m31 * this.m31 + this.m32 * this.m32 + this.m33 * this.m33)
        );

        let rotation: Quaternion = Quaternion.identity;
        if (scale.x === 0 || scale.y === 0 || scale.z === 0) {
            return {
                success: false,
                scale,
                rotation,
                translation
            };
        }

        const m1: Matrix = new Matrix(
            this.m11 / scale.x, this.m12 / scale.x, this.m13 / scale.x, 0,
            this.m21 / scale.y, this.m22 / scale.y, this.m23 / scale.y, 0,
            this.m31 / scale.z, this.m32 / scale.z, this.m33 / scale.z, 0,
            0, 0, 0, 1
        );

        rotation = Quaternion.createFromRotationMatrix(m1);
        return {
            success: true,
            scale,
            rotation,
            translation
        };
    }

    /**
     * Calculates the determinant of the matrix.
     * @returns {number} The determinant of the matrix.
     */
    public determinant(): number {
        const a: number =  (this.m33 * this.m44 - this.m34 * this.m43);
        const b: number =  (this.m32 * this.m44 - this.m34 * this.m42);
        const c: number =  (this.m32 * this.m43 - this.m33 * this.m42);
        const d: number =  (this.m31 * this.m44 - this.m34 * this.m41);
        const e: number =  (this.m31 * this.m43 - this.m33 * this.m41);
        const f: number =  (this.m31 * this.m42 - this.m32 * this.m41);
        return (
            this.m11 * (this.m22 * a - this.m23 * b + this.m24 * c) -
            this.m12 * (this.m21 * a - this.m23 * d + this.m24 * e) +
            this.m13 * (this.m21 * b - this.m22 * d + this.m24 * f) -
            this.m14 * (this.m21 * c - this.m22 * e + this.m23 * f)
        );
    }

    /**
     * Calculates the determinant of the matrix.
     * @param {Matrix} matrix Source matrix.
     * @returns {number} The determinant of the matrix.
     */
    public static determinant(matrix: Matrix): number {
        return matrix.determinant();
    }

    /**
     * Calculates the inverse of a matrix.
     * @returns {Matrix} The inverse of the matrix.
     */
    public inverse(): Matrix {
        // tslint:disable-next-line:no-this-assignment
        const { m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44 } = this;
        const a: number = (m33 * m44 - m34 * m43);
        const b: number = (m32 * m44 - m34 * m42);
        const c: number = (m32 * m43 - m33 * m42);
        const d: number = (m31 * m44 - m34 * m41);
        const e: number = (m31 * m43 - m33 * m41);
        const f: number = (m31 * m42 - m32 * m41);

        const g: number = (m22 * a - m23 * b + m24 * c);
        const h: number = -(m21 * a - m23 * d + m24 * e);
        const i: number = (m21 * b - m22 * d + m24 * f);
        const j: number = -(m21 * c - m22 * e + m23 * f);

        const det: number = (1.0 / (m11 * g + m12 * h + m13 * i + m14 * j));

        const m: number = (m23 * m44 - m24 * m43);
        const n: number = (m22 * m44 - m24 * m42);
        const o: number = (m22 * m43 - m23 * m42);
        const p: number = (m21 * m44 - m24 * m41);
        const q: number = (m21 * m43 - m23 * m41);
        const r: number = (m21 * m42 - m22 * m41);

        const s: number = (m23 * m34 - m24 * m33);
        const t: number = (m22 * m34 - m24 * m32);
        const u: number = (m22 * m33 - m23 * m32);
        const v: number = (m21 * m34 - m24 * m31);
        const w: number = (m21 * m33 - m23 * m31);
        const x: number = (m21 * m32 - m22 * m31);

        return Matrix.multiplyScalar(new Matrix(
            g, -(m12 * a - m13 * b + m14 * c), (m12 * m - m13 * n + m14 * o), -(m12 * s - m13 * t + m14 * u),
            h, (m11 * a - m13 * d + m14 * e), -(m11 * m - m13 * p + m14 * q), (m11 * s - m13 * v + m14 * w),
            i, -(m11 * b - m12 * d + m14 * f), (m11 * n - m12 * p + m14 * r), -(m11 * t - m12 * v + m14 * x),
            j, (m11 * c - m12 * e + m13 * f), -(m11 * o - m12 * q + m13 * r), (m11 * u - m12 * w + m13 * x)
        ), det);
    }

    /**
     * Calculates the inverse of a matrix.
     * @param {Matrix} matrix1 Source matrix.
     * @returns {Matrix} The inverse of the matrix.
     */
    public static inverse(matrix1: Matrix): Matrix {
        return matrix1.inverse();
    }

    /**
     * Determines whether the specified Matrix is equal to the Matrix.
     * @param {Matrix} matrix2 The Matrix to compare with the current Matrix.
     * @returns {boolean} <b>true</b> if the specified Matrix is equal to the current Matrix; <b>false</b> otherwise.
     */
    public equals(matrix2: Matrix): boolean {
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                if (this.matrix[x][y] !== matrix2.matrix[x][y]) {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * Determines whether the specified Matrix is equal to the other specified Matrix.
     * @param {Matrix} matrix1 The Matrix to compare with matrix2.
     * @param {Matrix} matrix2 The Matrix to compare with matrix1.
     * @returns {boolean} <b>true</b> if the specified Matrix is equal to the current Matrix; <b>false</b> otherwise.
     */
    public static equals(matrix1: Matrix, matrix2: Matrix): boolean {
        return matrix1.equals(matrix2);
    }

    /**
     * Subtracts matrices.
     * @param {Matrix} matrix Source matrix.
     * @returns {Matrix} Result of the subtraction.
     */
    public subtract(matrix: Matrix): Matrix {
        return Matrix.subtract(this, matrix);
    }

    /**
     * Subtracts matrices.
     * @param {Matrix} matrix1 Source matrix.
     * @param {Matrix} matrix2 Source matrix.
     * @returns {Matrix} Result of the subtraction.
     */
    public static subtract(matrix1: Matrix, matrix2: Matrix): Matrix {
        const a: Matrix = matrix1;
        const b: Matrix = matrix2;
        const c: Matrix = Matrix.identity;
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                c.matrix[x][y] = a.matrix[x][y] - b.matrix[x][y];
            }
        }
        return c;
    }

    /**
     * Multiplies a matrix by a scalar value.
     * @param {number} scalar Scalar value.
     * @returns {Matrix} Result of the multiplication.
     */
    public multiplyScalar(scalar: number): Matrix {
        return Matrix.multiplyScalar(this, scalar);
    }

    /**
     * Multiplies a matrix by a scalar value.
     * @param {Matrix} matrix1 Source matrix.
     * @param {number} scalar Scalar value.
     * @returns {Matrix} Result of the multiplication.
     */
    public static multiplyScalar(matrix1: Matrix, scalar: number): Matrix {
        const c: Matrix = Matrix.identity;
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                c.matrix[x][y] = matrix1.matrix[x][y] * scalar;
            }
        }
        return c;
    }

    /**
     * Multiplies a matrix by another matrix.
     * @param {Matrix} matrix Source matrix.
     * @returns {Matrix} Result of the multiplication.
     */
    public multiply(matrix: Matrix): Matrix {
        return Matrix.multiply(this, matrix);
    }

    /**
     * Multiplies a matrix by another matrix.
     * @param {Matrix} matrix1 Source matrix.
     * @param {Matrix} matrix2 Source matrix.
     * @returns {Matrix} Result of the multiplication.
     */
    public static multiply(matrix1: Matrix, matrix2: Matrix | number): Matrix {
        if (typeof matrix2 === 'number') {
            // scalar multiplaction
            return Matrix.multiplyScalar(matrix1, matrix2);
        } else {
            // matrix multiplaction
            const a: Matrix = matrix1;
            const b: Matrix = matrix2;
            return new Matrix(
                (a.m11 * b.m11) + (a.m12 * b.m21) + (a.m13 * b.m31) + (a.m14 * b.m41),
                (a.m11 * b.m12) + (a.m12 * b.m22) + (a.m13 * b.m32) + (a.m14 * b.m42),
                (a.m11 * b.m13) + (a.m12 * b.m23) + (a.m13 * b.m33) + (a.m14 * b.m43),
                (a.m11 * b.m14) + (a.m12 * b.m24) + (a.m13 * b.m34) + (a.m14 * b.m44),
                (a.m21 * b.m11) + (a.m22 * b.m21) + (a.m23 * b.m31) + (a.m24 * b.m41),
                (a.m21 * b.m12) + (a.m22 * b.m22) + (a.m23 * b.m32) + (a.m24 * b.m42),
                (a.m21 * b.m13) + (a.m22 * b.m23) + (a.m23 * b.m33) + (a.m24 * b.m43),
                (a.m21 * b.m14) + (a.m22 * b.m24) + (a.m23 * b.m34) + (a.m24 * b.m44),
                (a.m31 * b.m11) + (a.m32 * b.m21) + (a.m33 * b.m31) + (a.m34 * b.m41),
                (a.m31 * b.m12) + (a.m32 * b.m22) + (a.m33 * b.m32) + (a.m34 * b.m42),
                (a.m31 * b.m13) + (a.m32 * b.m23) + (a.m33 * b.m33) + (a.m34 * b.m43),
                (a.m31 * b.m14) + (a.m32 * b.m24) + (a.m33 * b.m34) + (a.m34 * b.m44),
                (a.m41 * b.m11) + (a.m42 * b.m21) + (a.m43 * b.m31) + (a.m44 * b.m41),
                (a.m41 * b.m12) + (a.m42 * b.m22) + (a.m43 * b.m32) + (a.m44 * b.m42),
                (a.m41 * b.m13) + (a.m42 * b.m23) + (a.m43 * b.m33) + (a.m44 * b.m43),
                (a.m41 * b.m14) + (a.m42 * b.m24) + (a.m43 * b.m34) + (a.m44 * b.m44)
            );
        }
    }

    /**
     * Divides the components of a matrix by a scalar.
     * @param {number} scalar The divisor.
     * @returns {Matrix} Resulting matrix.
     */
    public divideScalar(scalar: number): Matrix {
        return Matrix.divideScalar(this, scalar);
    }

    /**
     * Divides the components of a matrix by a scalar.
     * @param {Matrix} matrix1 Source matrix.
     * @param {number} scalar The divisor.
     * @returns {Matrix} Resulting matrix.
     */
    public static divideScalar(matrix1: Matrix, scalar: number): Matrix {
        return Matrix.multiplyScalar(matrix1, 1 / scalar);
    }

    /**
     * Divides the components of a matrix by the corresponding components of another matrix.
     * @param {Matrix} matrix The divisor.
     * @returns {Matrix} Result of the division.
     */
    public divide(matrix: Matrix): Matrix {
        return Matrix.divide(this, matrix);
    }

    /**
     * Divides the components of a matrix by the corresponding components of another matrix.
     * @param {Matrix} matrix1 Source matrix.
     * @param {Matrix} matrix2 The divisor.
     * @returns {Matrix} Result of the division.
     */
    public static divide(matrix1: Matrix, matrix2: Matrix): Matrix {
        const a: number[][] = matrix1.matrix;
        const b: number[][] = matrix2.matrix;
        const c: Matrix = Matrix.identity;
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                c.matrix[x][y] = a[x][y] / b[x][y];
            }
        }
        return c;
    }

    public static createFromArray(a: number[][]): Matrix {
        return new Matrix(
            a[0][0], a[0][1], a[0][2], a[0][3],
            a[1][0], a[1][1], a[1][2], a[1][3],
            a[2][0], a[2][1], a[2][2], a[2][3],
            a[3][0], a[3][1], a[3][2], a[3][3]
        );
    }

    /**
     * Creates a rotation Matrix from a Quaternion.
     * @param {Quaternion} q Quaternion to create the Matrix from.
     * @returns {Matrix} The created Matrix.
     */
    public static createFromQuaternion(q: Quaternion): Matrix {
        const xx: number = q.x * q.x;
        const yy: number = q.y * q.y;
        const zz: number = q.z * q.z;
        const xy: number = q.x * q.y;
        const zw: number = q.z * q.w;
        const zx: number = q.z * q.x;
        const yw: number = q.y * q.w;
        const yz: number = q.y * q.z;
        const xw: number = q.x * q.w;
        return new Matrix(
            (1 - 2 * (yy + zz)), (2 * (xy + zw)), (2 * (zx - yw)), 0,
            (2 * (xy - zw)), (1 - 2 * (zz + xx)), (2 * (yz + xw)), 0,
            (2 * (zx + yw)), (2 * (yz - xw)), (1 - 2 * (yy + xx)), 0,
            0, 0, 0, 1
        );
    }

    /**
     * Creates a new rotation matrix from a specified yaw, pitch, and roll.
     * @param {number} yaw Angle of rotation, in radians, around the y-axis.
     * @param {number} pitch Angle of rotation, in radians, around the x-axis.
     * @param {number} roll Angle of rotation, in radians, around the z-axis.
     * @returns {Matrix} A new rotation matrix with the specified yaw, pitch, and roll.
     */
    public static createFromYawPitchRoll(yaw: number, pitch: number, roll: number): Matrix {
        const q: Quaternion = Quaternion.createFromYawPitchRoll(yaw, pitch, roll);
        return Matrix.createFromQuaternion(q);
    }

    /**
     * Builds a perspective projection matrix and returns the result by value.
     * @param {number} width Width of the view volume at the near view plane.
     * @param {number} height Height of the view volume at the near view plane.
     * @param {number} nearPlaneDistance Distance to the near view plane.
     * @param {number} farPlaneDistance Distance to the far view plane.
     * @returns {Matrix} The projection matrix.
     */
    public static createPerspective(width: number, height: number,
                                    nearPlaneDistance: number, farPlaneDistance: number): Matrix {
        if (nearPlaneDistance <= 0) {
            throw new TypeError('nearPlaneDistance argument out of range. Must be greater than 0.');
        }
        if (farPlaneDistance <= 0) {
            throw new TypeError('farPlaneDistance argument out of range. Must be greater than 0.');
        }
        if (nearPlaneDistance > farPlaneDistance) {
            throw new TypeError('Argument out of range. nearPlaneDistance must be less than farPlaneDistance.');
        }

        const a: number = 2 * nearPlaneDistance / height;
        const b: number = 2 * nearPlaneDistance / width;
        const c: number = farPlaneDistance / (nearPlaneDistance - farPlaneDistance);
        const d: number = nearPlaneDistance * c;
        return new Matrix(
            b, 0, 0, 0,
            0, a, 0, 0,
            0, 0, c, -1,
            0, 0, d, 0
        );
    }

    /**
     * Builds a perspective projection matrix based on a field of view and returns by value.
     * @param {number} fieldOfView Field of view in the y direction, in radians.
     * @param {number} aspectRatio Aspect ratio, defined as view space width divided by height.
     * @param {number} nearPlaneDistance Distance to the near view plane.
     * @param {number} farPlaneDistance Distance to the far view plane.
     * @returns {Matrix} The perspective projection matrix.
     */
    public static createPerspectiveFOV(fieldOfView: number, aspectRatio: number,
                                       nearPlaneDistance: number, farPlaneDistance: number): Matrix {
        if (fieldOfView <= 0 || fieldOfView >= Math.PI) {
            throw new TypeError('fieldOfView argument out of range. Must be greater than 0 and less than pi.');
        }
        if (nearPlaneDistance <= 0) {
            throw new TypeError('nearPlaneDistance argument out of range. Must be greater than 0.');
        }
        if (farPlaneDistance <= 0) {
            throw new TypeError('farPlaneDistance argument out of range. Must be greater than 0.');
        }
        if (nearPlaneDistance > farPlaneDistance) {
            throw new TypeError('Argument out of range. nearPlaneDistance must be less than farPlaneDistance.');
        }

        const a: number = 1 / Math.tan(fieldOfView * 0.5);
        const b: number = a / aspectRatio;
        const c: number = farPlaneDistance / (nearPlaneDistance - farPlaneDistance);
        const d: number = nearPlaneDistance * c;
        return new Matrix(
            b, 0, 0, 0,
            0, a, 0, 0,
            0, 0, c, -1,
            0, 0, d, 0
        );
    }

    /**
     * Returns a matrix that can be used to rotate a set of vertices around the x-axis.
     * @param {number} radians The amount, in radians, in which to rotate around the x-axis.
     * @returns {Matrix} The rotation matrix.
     */
    public static createRotationX(radians: number): Matrix {
        const a: number = Math.cos(radians);
        const b: number = Math.sin(radians);
        return new Matrix(
            1, 0, 0, 0,
            0, a, b, 0,
            0, -b, a, 0,
            0, 0, 0, 1
        );
    }

    /**
     * Returns a matrix that can be used to rotate a set of vertices around the y-axis.
     * @param {number} radians The amount, in radians, in which to rotate around the y-axis. Note that you can use
     * ToRadians to convert degrees to radians.
     * @returns {Matrix} The rotation matrix.
     */
    public static createRotationY(radians: number): Matrix {
        const a: number = Math.cos(radians);
        const b: number = Math.sin(radians);
        return new Matrix(
            a, 0, -b, 0,
            0, 1, 0, 0,
            b, 0, a, 0,
            0, 0, 0, 1
        );
    }

    /**
     * Returns a matrix that can be used to rotate a set of vertices around the z-axis.
     * @param {number} radians The amount, in radians, in which to rotate around the z-axis. Note that you can use
     * ToRadians to convert degrees to radians.
     * @returns {Matrix} The rotation matrix.
     */
    public static createRotationZ(radians: number): Matrix {
        const a: number = Math.cos(radians);
        const b: number = Math.sin(radians);
        return new Matrix(
            a, b, 0, 0,
            -b, a, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        );
    }

    /**
     * Creates a scaling Matrix.
     * @param {number} x Value to scale by on the x-axis.
     * @param {number} y Value to scale by on the y-axis.
     * @param {number} z Value to scale by on the z-axis.
     * @returns {Matrix} The created scaling Matrix.
     */
    public static createScale(x: number, y: number, z: number): Matrix {
        return new Matrix(
            x, 0, 0, 0,
            0, y, 0, 0,
            0, 0, z, 0,
            0, 0, 0, 1
        );
    }

    /**
     * Creates a translation Matrix.
     * @param {number} x Value to translate by on the x-axis.
     * @param {number} y Value to translate by on the y-axis.
     * @param {number} z Value to translate by on the z-axis.
     * @returns {Matrix} The created translation Matrix.
     */
    public static createTranslation(x: number, y: number, z: number): Matrix {
        return new Matrix(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            x, y, z, 1
        );
    }

    public static createWorld(position: Vector3, forward: Vector3, up: Vector3): Matrix {
        const back = forward.negate().normalize();
        const right = up.cross(back).normalize();
        const down = back.cross(right);
        return new Matrix(
            right.x, right.y, right.z, 0,
            down.x, down.y, down.z, 0,
            back.x, back.y, back.z, 0,
            position.x, position.y, position.z, 1
        );
    }

    /**
     * Linearly interpolates between the corresponding values of two matrices.
     * @param {Matrix} matrix1 Source matrix.
     * @param {Matrix} matrix2 Source matrix.
     * @param {number} amount Interpolation value.
     * @returns {Matrix} Resulting matrix.
     */
    public static lerp(matrix1: Matrix, matrix2: Matrix, amount: number): Matrix {
        const a: number[][] = matrix1.matrix;
        const b: number[][] = matrix2.matrix;
        const c: Matrix = Matrix.identity;
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                c.matrix[x][y] = a[x][y] + (b[x][y] - a[x][y]) * amount;
            }
        }
        return c;
    }

    /**
     * Returns the composition of a list of matrices.
     * @param {...Matrix} matrices The list of matrices to multiply together.
     * @returns {Matrix} The matrix composed of the list of matrices.
     */
    public static compose(...matrices: Matrix[]): Matrix {
        let m: Matrix = Matrix.identity;
        matrices.forEach(matrix => {
            m = m.multiply(matrix);
        });
        return m;
    }

    public toJSON(): any {
        return this._matrix;
    }
}
