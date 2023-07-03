import { type FSUrl } from '@vkno/typed';

/**
 * @type DirectoryUrl
 * @description a filesystem Url specifier which resolves to a directory.
 * @satisfies FSUrl
 */
export declare type DirectoryUrl = FSUrl & { __dir: true };
