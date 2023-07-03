import { 
    type Key,
    type SubClass,
} from "@vkno/typed";

import { AssertionError } from "dev_deps";





function isError( value: unknown ): value is Error {
    if(typeof value === 'object' && !Array.isArray(value) && value !== null) {
        return true;
    }
    return false;
}

/**
 * assert properties exist on an error object.
 * @param fn 
 * @param classType 
 * @param props 
 */
export function assertThrowsProps( fn: (...args:unknown[]) => unknown, classType: SubClass<Error>, props: Record<Key, unknown> ): void {
    try{ fn() }
    catch(e: unknown) {
        if(isError(e)) {
            if(e instanceof classType) {
                const err = e as unknown as Record<string, unknown>;
                for(const [prop, value] of Object.entries(props)) {
                    if(err[prop]){
                        if(err[prop] !== value) {
                            throw new AssertionError(`expected property ${prop} to equal ${value} but got ${err[prop]}`);
                        }
                        continue;
                    }
                    throw new AssertionError(`property ${prop} does not exist on error class ${classType.name}`);
                }
                return;
            }
            throw new AssertionError(`error thrown which was not the expected ${classType.name} type.`);
        }
        throw new AssertionError(`an error instance was not thrown.`);
    }
    throw new AssertionError(`no error thrown.`);
}
