import { describe, it, expect } from 'vitest';

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

    describe(`rxAbsDirPath`, () => {
        describe(`passes`, () => {
            it(`/directory/`, () => expect(() => rxAbsDirPath.test('/directory/')));
        });
    });

    describe(`isAbsDirPath`, () => {

        it(`is usable in function params`, () => {

        });

    });

})
