import {
	type FSEntryType, 
	type FSEntryTypeBrand,
	type FSPath,
	type FSGuardOptions,
	isFSPath,
	isFSUrlSpec,
	processFSGuardOptionsSync,
	recast,
} from '@vkno/typed';


import {
	guardError,
	NotImplementedError,
} from '@vkno/errantly';


/**
 *  
 */
export declare type FSURL<ET extends FSEntryType = 'entry'> = URL & { protocol: 'file:'; } & FSEntryTypeBrand<ET>;

export declare type FSFileURL = FSURL<'file'>;

export declare type FSDirectoryURL = FSURL<'directory'>;

/**
 * 
 * @param fse 
 */
export function toFSURL<ET extends FSEntryType = 'entry'>(fse: FSPath<ET>): FSURL<ET> {
	if(isFSURL<ET>(fse)) return fse;
	if(isFSUrlSpec<ET>(fse)) return new URL(fse) as FSURL<ET>;
	if(isFSPath<ET, 'absolute'>(fse))
	throw new NotImplementedError();
}




export function isFSURL<ET extends FSEntryType = 'entry'>(value: unknown, options:FSGuardOptions = { type: 'FSURL' }):value is FSURL<ET> {
	if(value instanceof URL) {
		if(value.protocol === 'file:') {
			const fsurl = recast<FSURL<ET>>(value);
			if(processFSGuardOptionsSync(fsurl, options)) {
				return true;
			}
		}
		return guardError(`URL is not a filesystem URL, expect file:// protocol - got ${value.protocol}`, options);
	}
	return guardError(`argument not an instance of URL`, options);
}

