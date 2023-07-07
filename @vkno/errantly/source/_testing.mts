import { describe, it, expect } from 'dev_deps';

import { TestClass } from './_testingElements.mts';

describe(`@vkno/errantly`, () => {

	describe(`throwing from class methods`, () => {

		it(`throws from a class method`, () => {

			expect(new TestClass().throwFromMethod()).toThrow();
		});

	});

});
