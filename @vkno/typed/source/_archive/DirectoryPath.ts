import { type FSPath } from '@vkno/typed';

/**
 * @type DirectoryPath
 * @description a filesystem entry which resolves to a directory.
 * @satisfies FSPath
 */
export declare type DirectoryPath = FSPath & { __dir: true };
