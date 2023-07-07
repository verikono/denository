import {
    GuardError
} from '@vkno/errantly';


/**
 * 
 */
export type guardErrorOptions = {
    type: string;
    raise?: boolean;
}


/**
 * 
 * @param {string} message the error message if optioned to throw.
 * @param {raise:boolean} options when optioned true a guard error is thrown 
 * @returns {never|false}
 */
export function guardError(message:string, options:guardErrorOptions): never|false {
    if(options.raise) {
        throw new GuardError(options.type, message);
    }
    return false;
}
