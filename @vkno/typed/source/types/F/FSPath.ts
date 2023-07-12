import {
	type FSEntry,
	type FSEntryType,
	type FSEntryTypeBrand,
	type FSGuard,
	fsGuardDefaults,
	isFSURL,
	isFSUrlSpec,
} from '@vkno/typed';

import {
	raiseError,
	GuardError,
	NotImplementedError
} from '@vkno/errantly';



/**
 * 
 */
export declare type FSPathType = 'absolute' | 'relative' | 'either';


/**
 * 
 */
export declare type FSPathTypeBrand<PT extends FSPathType> = {
	[P in PT as P extends 'absolute' ? '__absolute' : P extends 'relative' ? '__relative' : never]: true;
};


/**
 * @type FSPath
 * @alias string
 * @description branded string for a filesystem path, brands include absolute/relative path type and "file" or "directory" for entry type.
 * @argument {FSEntryType} ET brand the entry type (ET) - file, directory or either.
 * @argument {FSPathType} REL brand the relativity of the path - absolute, relative or either.
 */
export declare type FSPath<ET extends FSEntryType = 'entry', PT extends FSPathType = 'either'> =
	string & { __fs:true; __path:true; } & FSEntryTypeBrand<ET> & FSPathTypeBrand<PT>;


/**
 * 
 */
export declare type FSPathGuard = FSGuard & {
	isAbsolute: boolean;
	isRelative: boolean;
};


/**
 * 
 */
export const rxAbsoluteFSPath = /^\/.+$/;


/**
 * 
 */
export const rxRelativeFSPath = /^\..+$/;


/**
 * 
 */
export const rxFSPath = /^\.|\/[^<>:"?*]+$/;


/**
 * @name isFSPath
 * @description filesystem path typeguard
 * @param value 
 * @param {Partial<FSPathGuard>} options
 * @throws {GuardError}
 * @todo verify
 */
export function isFSPath<ET extends FSEntryType = 'entry', PT extends FSPathType = 'either'>(value:unknown, options:Partial<FSPathGuard> = {}): value is FSPath<ET, PT> {
	const { raise } = Object.assign({}, fsGuardDefaults, options);
	if(typeof value === 'string') {
		if(rxFSPath.test(value)) {
			return true;
		}
		return !raise ? false : raiseError(GuardError, `${value} failed regex rxFSPath`);
	}
	return !raise ? false : raiseError(GuardError, 'all FSPaths are a string primitive, not argued a string');
}


/**
 * @name toFSPath
 * @description convert an FSEntry to a FSPath, all returns will be absolute as all OTHER FSEntrys must be absolute. 
 * @throws {TypeError}
 * @param value 
 */
export function toFSPath<ET extends FSEntryType = 'entry', PT extends 'absolute' = 'absolute'>(value: FSEntry<ET,PT>): FSPath<ET, PT> {
	if(isFSURL<ET>(value)) return value.pathname as FSPath<ET, 'absolute'>;
	if(isFSUrlSpec<ET>(value)) return new URL(value).pathname as FSPath<ET, 'absolute'>;
	throw new TypeError('argued source is not a URL instance, filesystem URL spec, or a filesystem path');
}