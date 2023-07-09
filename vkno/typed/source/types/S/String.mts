import {
	type RangeGuard,
	rangeGuardDefaults
} from '@vkno/typed';

/**
 * @type StringGuard
 * @implements TypeGuard, RangeGuard
 * @description guard for expected string features
 * @property min the a minimum length
 */
export declare type StringGuard = RangeGuard & {
	emptyOk: boolean;
};

export const stringGuardDefaults = Object.assign({}, rangeGuardDefaults, {
	emptyOk: false,
});

export function isString(
	value: unknown,
	options: Partial<StringGuard> = {},
): value is string {
	const { min, max, raise } = Object.assign({}, stringGuardDefaults, {
		min: stringGuardDefaults.emptyOk ? 0 : 1,
	}, options);
	if (typeof value === 'string') {
		if (value.length >= min && value.length <= max) {
			return true;
		}
		return !raise ? false : raise;
	}
	return !raise ? false : raise;
}
