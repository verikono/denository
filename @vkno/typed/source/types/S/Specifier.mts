import type {
    Key
} from '@vkno/typed';

/**
 * @type Specifier
 * @description a selection, unique or categorical.
 * @argument {boolean|`either`} U [Unique] when true this specifier is to be considered unique to the context, when false the specifier .
 * @argument {string} Ctx [Context] the content this specifier lives inside of, default "global".
 * @example type SomeUUID = string & Specifier<true> - a globally unique identifier (global being the default provided Ctx/context)
 */
export declare type Specifier<U extends 'unique'|'categorical'|'either' = 'either', C extends string = 'global'> = 
    Key &
    { __specifier: true; } &
    { [ K in U as K extends 'unique' ? '__unique' : K extends 'categorical' ? '__categorical' : never ]: true } &
    { __context: C extends 'global' ? 'global': C; };
