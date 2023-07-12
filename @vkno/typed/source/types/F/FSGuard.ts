import {
	type PartialWith,
	type TypeGuard
} from '@vkno/typed';

import { typeGuardDefaults } from '../T/TypeGuard.ts';

/**
 * @type FSGuard
 * @description filesystem type guard
 * @property {boolean} verify perform a disk check for the filesystem entry existence
 * @property {boolean} isReadable ensure readability of the filesystem entry
 * @property {boolean} isWritable ensure writablility of the filesystem entry
 * @property {boolean} isFile perform a disk check on the filesystem entry and assert a valid file entry.
 * @property {boolean} isDirectory perform a disk check on the filesystem entry and assert a valid directory entry.
 * @property {string} type the type being guarded.
 */
export declare type FSGuard = TypeGuard & {
	verify: boolean;
	isReadable: boolean;
	isWritable: boolean;
	isFile: boolean;
	isDirectory: boolean;
	type: string;
};

export declare type FSGuardOptions = PartialWith<FSGuard, 'type'>;


/**
 * @name fsGuardDefaults
 * @description default values for an FSGuard shape
 */
export const fsGuardDefaults: FSGuard = Object.assign({}, typeGuardDefaults, {
	verify: false,
	isReadable: false,
	isWritable: false,
	isFile: false,
	isDirectory: false,
	type: 'unknown'
});

