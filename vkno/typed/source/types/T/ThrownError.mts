export declare type ThrownError<RT extends 'deno'|'node' = 'deno'> = 
    {
        message: string;
        stack: string;
    } &
    RT extends 'node' ? {
        code: string;
    } :
    RT extends 'deno' ? {

    } :
    never;