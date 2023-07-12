/**
 * @name TypeGuard
 * @property {boolean} raise when true the typeguard will throw an error rather than return false, effectively rendering the typeguard a validator.
 */
export declare type TypeGuard = {
	raise: boolean;
};


/**
 * @name typeGuardDefaults
 * @description default typeguard options
 * @property {boolean} raise the typeguard will return false (perform as a typeguard, not a validator)
 */
export const typeGuardDefaults: TypeGuard = {
	raise: false,
};
