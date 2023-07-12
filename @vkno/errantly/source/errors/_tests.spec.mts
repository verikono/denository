import {
	assert,
	describe,
    expect,
	it
} from 'vitest';

import {
	TestClass
} from '../_testingElements.mts';


import {
	GuardError,
	// assertThrowsProps,
} from '@vkno/errantly';



describe(`@verikono/errantly.GuardError`, () => {

	it(`exports an GuardError class`, () =>
		assert(GuardError.name === 'GuardError'));

	describe(`throws from a synchronous class member`, () => {

		it(`throws a TestError`, () => {
			expect(() => new TestClass().throwGuardError()).toThrow(Error); //, 'no message provided');
		});

		it(`sets the right classname`, () => {
			try { new TestClass().throwGuardError() }
			catch (err:any) { assert(err.name === 'GuardError') }
		});

	});

});
