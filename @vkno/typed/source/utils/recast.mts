/**
 * recast a variable to target T.
 * @param _target 
 * @type T the target to recards to.
 * @returns 
 */
export const recast = <T extends object>(target:unknown):T => target as T;
