import {
	type FSGuard,
	type FSPath,
	type FSPathType,
	type FSUrlSpec,
	type FSURL,
	isFSURL,
	isFSUrlSpec,
	toFSUrlSpec,
	isNodeError,
} from '@vkno/typed';

import {
	NotImplementedError,
	UnhandledException
} from '@vkno/errantly';

// import {
// 	accessSync,
// 	constants,
// } from 'node:fs';


/**
 * @name FSEntryType
 * @description 'file' for a file, 'directory' for a directory, 'entry' for either
 */
export declare type FSEntryType = 'file' | 'directory' | 'entry';


/**
 * @name FSEntryTypeBrand
 * @description
 * @argument {FSEntryType} ET the expected filesystem entry type.
 */
export declare type FSEntryTypeBrand<ET extends FSEntryType = 'entry'> = {
	[ K in ET as K extends 'file' ? '__file' : K extends 'directory' ? '__directory' : never ]:true;
}


/**
 * @type FSE
 * @argument {FSEntryType} 'file' for a file, 'directory' for a directory, 'entry' for either.
 * @argument {}
*/
export declare type FSEntry<ET extends FSEntryType = 'entry', PT extends FSPathType = 'either'> = FSPath<ET, PT> | FSUrlSpec<ET> | FSURL<ET>;

export function isFSEntry<ET extends FSEntryType = 'entry', PT extends FSPathType = 'either'>(value: unknown, _options: Partial<FSGuard> = {}): value is FSEntry<ET, PT> {
	if(isFSURL<ET>(value) || isFSUrlSpec<ET>(value) || isFSURL<ET>(value)) {
		return true;
	}
	throw new NotImplementedError();
}

type NodeError = {
	code: string;
}

/**
 * Process Filesystem Guard Options, returning true if all extended guard options pass.
 */
export function processFSGuardOptionsSync(value:FSEntry, options:Partial<FSGuard> = {} ): boolean {
	options;
	const _url = toFSUrlSpec(value);
	throw new NotImplementedError();
}


export function fsEntryExistsSync(target:FSEntry<'entry', 'absolute'>, options:{type?:'FSURL'|'FSPath'|'FSUrlSpec'} = {}): boolean {
	try {
		// accessSync(target, constants.F_OK);
		return true;
	}
	catch(err: unknown) {
		if(isNodeError(err)) {
			if( err.code === 'ENOENT' ) return false;
			throw err;
		}
		throw new UnhandledException(`node did not throw a node error..`);
	}
}


export function fsEntryIsReadableSync(entry: FSEntry<'entry', 'absolute'>): boolean {
	try {
		// accessSync(entry, constants.F_OK|constants.R_OK);
		return true;
	}
	catch(err: unknown) {
		if(isNodeError(err)) {
			if(['ENOTENT', 'EACCESS'].includes(err.code)) return false;
			throw err;
		}
		throw new UnhandledException(`node did not throw a node error..`);
	}
}


export function fsEntryIsWriteableSync(entry: FSEntry<'entry', 'absolute'>): boolean {
	try {
		// const {F_OK, R_OK, W_OK} = constants;
		// accessSync(entry, F_OK|R_OK|W_OK);
		return true;
	}
	catch(err: unknown) {
		if(isNodeError(err)) {
			if(['ENOTENT', 'EACCESS'].includes(err.code)) return false;
			throw err;
		}
		throw new UnhandledException(`node did not throw a node error..`);
	}
}


export function fsEntryIsExecutableSync(entry: FSEntry<'entry', 'absolute'>): boolean {
	try {
		// const {F_OK, R_OK, W_OK, X_OK} = constants;
		// accessSync(entry, F_OK|R_OK|W_OK|X_OK);
		return true;
	}
	catch(err: unknown) {
		if(isNodeError(err)) {
			if(['ENOTENT', 'EACCESS'].includes(err.code)) return false;
			throw err;
		}
		throw new UnhandledException(`node did not throw a node error..`);
	}
}


export function fsEntryIsFileSync(fse: FSEntry<'file'|'entry'>): boolean {
	fse;
	throw new NotImplementedError();	
}


export function fsEntryIsDirectory(fse: FSEntry<'directory'|'entry'>): boolean {
	fse;
	throw new NotImplementedError();
}
