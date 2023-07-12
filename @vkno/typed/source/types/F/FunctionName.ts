import {
    type Specifier
} from '@vkno/typed';


/**
 * @name FunctionName
 * @alias string
 * @description the name of a function
 */
export declare type FunctionName = string & Specifier & { __function: true; };
