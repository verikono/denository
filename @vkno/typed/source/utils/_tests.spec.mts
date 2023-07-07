import { describe, it, expect } from 'vitest';

import { guarded } from '@vkno/typed';
import { T } from './_tests.elements.mts';


describe(`@vkno/typed`, () => {

    describe(`argsGuard`, () => {

        it(`exports the argsGuard function`, () => expect(guarded).toBeTypeOf('function'));

        it(`decorates a class method`, () => {
            const instance = new T();
            instance.testMethod("some string");
        });

    });

});