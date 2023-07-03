import {
    describe,
    expect,
    it,
} from "dev_deps";

import {
    findAbove,
    findAboveSync
} from '@vkno/fsext';

describe(`@vkno/fsext`, () => {

    describe(`findAbove`, () => {

        it(`exports findAbove as a function`, () => expect(findAbove).toBeTypeOf('function'));

    });

    describe(`findAboveSync`, () => {

        it(`exports findAbove as a function`, () => expect(findAboveSync).toBeTypeOf('function'));

    });

});
