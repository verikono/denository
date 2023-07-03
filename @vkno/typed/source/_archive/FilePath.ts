import {
	type FSE,
	type FSGuard,
	fsGuardDefaults,
	type FSPath,
} from '@vkno/typed';

export declare type FilePath = FSPath & { __file: true };

/**
 * @name rxFilePath
 * @description regular expression matching a filesystem path that resolves to a file (checks against rxFSPath, then looks for a . in the last path partial)
 */
export const rxFilePath = /^[.\/]+$/g;

/**
 * @param value
 * @param options
 */
export function isFilePath(
	value: unknown,
	options: Partial<FSGuard> = {},
): value is FilePath {
	const { raise, verify } = Object.assign({}, fsGuardDefaults, options);
	if (typeof value === 'string' && value.length > 0) {
		if (rxFilePath.test(value)) {
			// return !verify ||
		}
	}
	throw new Error('not implemented');
}

export function verifyFilePathSync(value: FilePath): boolean {
	throw new Error('not implemented');
}

export async function verifyFilePath(value: FilePath): Promise<boolean> {
	throw new Error('not implemented');
}

export function newFilePath(filePath: string): FilePath {
	throw new Error('not implemented');
}
