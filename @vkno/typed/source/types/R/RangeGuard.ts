import {
	type TypeGuard,
	typeGuardDefaults
} from '@vkno/typed';



/**
 * @type RangeGuard
 * @description A shape for guarding on min and max values.
 * @property {number} min the minimum allowed value, default negative Infinity.
 * @property {number} max the maximumum allowed value, default Infinity.
 */
export declare type RangeGuard = TypeGuard & {
	min: number;
	max: number;
};


/**
 * @name rangeGuardDefaults
 * @implements RangeGuard
 * @description minimum and maximum range set to infinity in both directions.
 */
export const rangeGuardDefaults: RangeGuard = Object.assign(
	{},
	typeGuardDefaults,
	{
		min: -Infinity,
		max: Infinity,
	},
);
