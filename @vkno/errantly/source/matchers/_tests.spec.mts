import {
    describe,
    it,
    expect,
} from "dev_deps";

import {
    ErrorBase,
    assertThrowsProps
} from "@vkno/errantly";

import {
    TestClass
} from '../_testing.mts';


describe(`@verikono/errantly.assertions.assertThrowsProps`, () => {

    it(`@verikono/errantly.assertions exports assertThrowsProps as function`, () =>
        expect(assertThrowsProps).toBeTypeOf('function'));

    it(`asserts ErrorBase has a name prop present when thrown`, () => {
        assertThrowsProps(() => { new TestClass().throwFromMethod() }, ErrorBase, { name: 'ErrorBase' });
    });

    it(`asserts ErrorBase has a className prop present when thrown`, () => {
        assertThrowsProps(() => { new TestClass().throwFromMethod() }, ErrorBase, { className: 'TestClass' });
    });


});