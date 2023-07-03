import {
	ErrorBase,
	GuardError,
	NotImplementedError
} from '@vkno/errantly';


export class TestError extends ErrorBase {
}

export class TestGuardError extends GuardError {

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
		throw new GuardError(message);
	}

	throwNotImplementedError(message?: string): never {
		throw new NotImplementedError(message);
	}

}
