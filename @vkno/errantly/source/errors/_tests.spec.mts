import {
	assert,
	assertThrows,
	describe,
	it
} from 'dev_deps';

import {
	TestClass
} from '../_testing.mts';


import {
	ErrorBase,
	GuardError,
	assertThrowsProps,
} from '@vkno/errantly';


describe(`@verikono/errantly.ErrorBase`, () => {

	it(`exports an ErrorBase class`, () => assert(ErrorBase.name === 'ErrorBase'));

	describe(`initial state`, () => {

		it(`ErrorBase.name is "ErrorBase"`, () =>
			assertThrowsProps(() => { new TestClass().throwFromMethod(); }, ErrorBase, { name:"ErrorBase" }));

	});


});


describe(`@verikono/errantly.GuardError`, () => {

	it(`exports an GuardError class`, () => assert(GuardError.name === 'GuardError'));

	describe(`throws from a synchronous class member`, () => {

		it(`throws a TestError`, () => {
			assertThrows(() => new TestClass().throwGuardError(), Error, 'no message provided');
		});

		it(`sets the right classname`, () => {
			try { new TestClass().throwGuardError() }
			catch (err) { assert(err.name === 'GuardError') }
		});

	});

});
