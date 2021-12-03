declare type SameAs<T> = T;
export interface IDeepTypeEqualsOptions {
    allowUnspecifiedObjectKeys?: boolean;
}
/**
 * Deeply checks if the input data type matches the reference.
 * @param reference an example of the type which should be tested
 * @param data the data to confirm if it conforms to the reference type
 * @returns boolean
 */
export default function deepTypeEquals<T>(reference: T, data: SameAs<T>, options?: IDeepTypeEqualsOptions): boolean;
/**
 * Returns a curried instance of deepTypeEquals
 * @param reference
 * @returns ( data ) => boolean;
 */
export declare function createDeepTypeEquals<T>(reference: T): (data: SameAs<T>, options?: IDeepTypeEqualsOptions | undefined) => boolean;
/**
 *
 * @param args each argument should be an example of the types that is correct under this union.
 * @returns boolean
 */
export declare function union<T>(...args: T[]): T;
export declare function literal<T>(arg: T): T;
export declare function unknown(): unknown;
export declare function optional<T>(arg: T): T | undefined;
export {};
//# sourceMappingURL=index.d.ts.map