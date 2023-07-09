/**
 * @description set all properties of a type as optional except for a mandatory list
 * @param {object} T - the subject type
 * @param {string} M - the mandatory union/list
 */
export declare type PartialWith<T extends object, M extends string> =
    { [P in keyof T as P extends M ? never : P ]?: T[P]; } &
    { [P in M]: P extends keyof T ? T[P] : never; };
