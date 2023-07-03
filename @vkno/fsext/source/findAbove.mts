// import * as process from "node:process";

import {
    type FSEntry,
    type FSEntryName,
    type FSEntryType,
    // type FSPath,
    type FSURL,
    isFSPath,
    toFSPath,
} from '@vkno/typed';

import {
    NotImplementedError
} from '@vkno/errantly';
import { toFSURL } from '../../typed/source/types/F/FSURL.ts';

export declare type findAboveParams = {
    cwd: FSEntry<'directory', 'absolute'>;
}

export declare type findAboveOptions = Partial<findAboveParams>;

export async function findAbove<T extends FSEntryType = 'entry'>(name: FSEntryName, options: findAboveOptions = {}):Promise<FSURL<T>> {
    const rootPath = '/';
    const dirSep = '/';
    const { cwd:fse } = Object.assign({}, findAboveDefaults, options);
    const searchPath = toFSPath<'directory', 'absolute'>(fse);
    if(isFSPath(searchPath, { verify: true })) {
        const pathParts = searchPath.split(dirSep);
        while(pathParts.length) {
            const testPath = [rootPath, ...pathParts, name].join(dirSep);
            if(isFSPath(testPath, { verify: true })) {
                return toFSURL<T>(testPath);
            }
            pathParts.pop();
        }
        throw new NotImplementedError();
    }
    throw new NotImplementedError();
}

export function findAboveSync(name:FSEntryName): URL {
    throw new NotImplementedError();
}



export const findAboveDefaults: findAboveParams = {
    cwd: 'a' as FSEntry<'directory', 'absolute'>
    // cwd: cwd() as FSEntry<'directory', 'absolute'>
};
