/**
 * @name DuckType
 * Evaluate the subject to duck type against the testable.
 */
export type DuckType<Subject, Testable> = Subject extends Testable ? true: false;


/**
 * 
 * @returns 
 */
// deno-lint-ignore no-explicit-any
export function expectDuckType<S, Testable>( value:S, guard:(value:any,...args:any[]) => value is Testable): void {
    if(guard(value)) {
        return;
    }
    throw new Error(`ducktype failed`);
}
