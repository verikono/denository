import {
    type FSGuard,
    fsGuardDefaults
} from '@vkno/typed';

import {
    guardError,
    ArgumentError
} from '@vkno/errantly';

export declare type AbsDirPath = string | ( string & { __absolute: true; __directory: true; __path: true; } );
export declare type AbsoluteDirectoryPath = AbsDirPath;


/**
 * @name rxDirectoryUrlSpec
 * @description regex testing for the existance of 'file:///' at the start of the string and no period in the last / seperator.
 */
export const rxAbsDirPath = /^\/.[^.]+$/;


/**
 * @name isAbsDirPath
 * @param {unknown} value reference to the test variable
 * @param {Partial<FSGuard>} options FileSystem Typeguard options 
 * @returns {boolean} 
 */
export function isAbsDirPath(value: unknown, options:Partial<FSGuard> = {}): value is AbsDirPath {
    const opts = Object.assign({}, fsGuardDefaults, { type: 'AbsDirPath' }, options);
    if(typeof value === 'string' && value.length > 0) {
        if(rxAbsDirPath.test(value)) {
            opts;
            return true;
        }
        return guardError(`argued value ${value} failed rxAbsDirPath regex`, opts);
    }
    return guardError('argued value was not a string', opts);
}
