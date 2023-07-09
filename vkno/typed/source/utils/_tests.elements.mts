import {
    guarded,
    type AbsDirPath,
    isAbsDirPath
} from '@vkno/typed';

type TestType = `Wonker`

const absDirPath:unique symbol = Symbol("AbsDirPath");


function isTypeType(value: unknown): value is TestType {
    if(typeof value === 'string' && value === `Wonker`) {
        return true;
    }
    throw new Error(`all good...`);
}



export class T {

    @guarded([absDirPath])
    testMethod(param: AbsDirPath): boolean {
        return typeof param === 'string';
    }


}