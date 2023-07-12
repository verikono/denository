import {
    type Errant,
    ErrorBase,
	GuardError,
	NotImplementedError
} from '@vkno/errantly';

export class TestError extends ErrorBase implements Errant {
    explanation = 'thrown during a test run';
    name = 'TestError';
}


export class TestClass {

	throwFromMethod(): never {
		throw new TestError('thrown-from-method');
	}

	async throwFromAsyncMethod(): Promise<never> {
		await new Promise((r) => r(true));
		throw new TestError(`thrown-from-async-method`);
	}

	throwGuardError(message?: string): never {
		throw new GuardError('TestClass.throwGuardError', message);
	}

	throwNotImplementedError(message?: string): never {
		throw new NotImplementedError(message);
	}

}
