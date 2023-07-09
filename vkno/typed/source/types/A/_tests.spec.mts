import { describe, it, expect, assertMatch } from 'dev_deps';

import {
    type AbsoluteFSEntry,
    type AbsoluteDirectoryPath,
    type AbsDirPath,
    isAbsDirPath
} from '@vkno/typed';

import {
    rxAbsDirPath
} from '@vkno/typed';

describe(`@vkno/erranty types [A]`, () => {

    describe(`AbsoluteFSEntry`, () => {

    });

    describe(`rxAbsDirPath`, () => {
        describe(`passes`, () => {
            it(`/directory/`, () => assertMatch('/directory/', rxAbsDirPath))
    });

    describe(`isAbsDirPath`, () => {

        it(`is usable in function params`, () => {

            

        });

    });

})