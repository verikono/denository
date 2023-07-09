import {
	type FSEntry,
	type FSEntryType,
	type FSEntryTypeBrand,
	type FSGuardOptions,
	// type FSPath,
	// type FSPathType,
	fsEntryExistsSync,
	fsGuardDefaults,
	isFSURL,
	isFSPath,
	// existsSync,
} from '@vkno/typed';

import {
	UnhandledException,
	// NotImplementedError,
	raiseError,
	guardError
} from '@vkno/errantly';



/**
 * @name FSUrl
 * @alias string
 * @description filesystem URL specifier
 */
export declare type FSUrlSpec<ET extends FSEntryType = 'entry'> = string & { __urlSpec:true; } & FSEntryTypeBrand<ET>;

export declare type FSUrlFileSpec = FSUrlSpec<'file'>;

export declare type FSDirectoryUrlSpec = FSUrlSpec<'directory'>;


/**
 * @name rxFSUrlSpec
 * @description regex testing for the existance of 'file:///' at the start of the string.
 */
export const rxFSUrlSpec = /^file:\/\/\/+$/;


/**
 * @name rxFileUrlSpec
 * @description regex testing for the existance of 'file:///' at the start of the string nd a period in the last / seperator.
 */
export const rxFSFileUrlSpec = /^file:\/\/\/.*\.[^.\\/:*?"<>|\r\n]+$/;


/**
 * @name rxDirectoryUrlSpec
 * @description regex testing for the existance of 'file:///' at the start of the string and no period in the last / seperator.
 */
export const rxFSDirectoryUrlSpec = /^file:\/\/\/.[^.]+$/;



/**
 * 
 * @param value 
 * @param options 
 * @returns 
 */
export function isFSUrlSpec<ET extends FSEntryType = 'entry'>(value:unknown, options:FSGuardOptions = { type: 'FSUrlSpec' }): value is FSUrlSpec<ET> {
	const { raise, verify, isReadable, isWritable, isFile, isDirectory } = Object.assign({}, fsGuardDefaults, options);
	if(typeof value === 'string') {
		if(rxFSUrlSpec.test(value)) {
			if(!isFile && !isDirectory || isFile && rxFSFileUrlSpec.test(value) || isDirectory && rxFSDirectoryUrlSpec.test(value)){
				if(!verify || fsEntryExistsSync(value as FSUrlSpec<ET>)) {
					return true;
				}
				return guardError(`${isFile ? 'file' : 'directory'} ${value} does not exist`, options);
			}
			return guardError(`value ${value} did not pass ${isFile ? `rxFileUrlSpec` : `rxDirectoryUrlSpec`}`, options);
		}
		return guardError(`value ${value} did not pass rxFSUrlSpec`, options);
	}
	return guardError('argument not a string primitive', options);
}


export function isFSFileUrlSpec(value:unknown, options:FSGuardOptions = { type: 'FSUrlSpec' }): value is FSUrlFileSpec {
	const { verify } = options;
	if(typeof value === 'string') {
		if(rxFSFileUrlSpec.test(value)) {

		}
	}
	return guardError(`argument not a string primitive`, options);
}

export function toFSUrlSpec<ET extends FSEntryType = 'entry'>(value: FSEntry<ET>, _options: { base?: FSEntry<'entry', 'absolute'> } = { } ):FSUrlSpec<ET> {
	const url = (
		isFSURL<ET>(value) ? value.href as FSUrlSpec<ET> :
		isFSUrlSpec<ET>(value) ? value :
		isFSPath<ET, 'absolute'>(value) ? `file://${value}` as FSUrlSpec<ET>: 
		raiseError(UnhandledException, 'method does not support relative FS paths , yet.')
	);
	return url;
}
