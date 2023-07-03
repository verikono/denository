import { type FilePath } from '@vkno/typed';

/**
 * @name AbsoluteFilePath
 * @description a filesystem path which resolves a file and is relative to the root of the filesystem.
 */
export declare type AbsoluteFilePath = FilePath & { __absolute: true };