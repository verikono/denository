import {
    Reflect
} from "https://deno.land/x/reflect_metadata@v0.1.12/mod.ts";


type Constructor<T = unknown> = new (...args: any[]) => T;

function decorator<T>(_: Constructor<T>): void {}


/**
 * 
 * @param args 
 * @returns 
 */
function methodDecorator(args:string): any {
    return function <T = unknown>(target:any, name:string, desc:PropertyDescriptor): any {
        Reflect.defineMetadata('method-decorator', args, target, name);
    }
}


/**
 * @name mything
 */
// @decorator<Example>
class Example {

    methodCheck(prop:string): number {
        prop;
        return 1;
    }

}

export function guarded(params:any[], options = {}): (...args:any[]) => any {
    
    return function(method:any, name:string, ctx:any, el: any) {

        console.log('\n\n\n');
        console.log(`params:`, params);
        console.log(`method:`, method);
        console.log(`name:`, name);
        console.log(`context:`, ctx);
        console.log(`el`, el);
        console.log(`md keys`, Reflect.getMetadataKeys(Example, 'method-decorator'));
        console.log(`metadata`, Reflect.getMetadata("method-decorator", Example.prototype, 'methodCheck'));


        function _method(thisCtx:any, ...args:any[]) {
            console.log("LOG: Entering method.");
            const result = method.call(thisCtx, ...args);
            console.log("LOG: Exiting method.");
            return result;
        }
        return _method;
    }

}
