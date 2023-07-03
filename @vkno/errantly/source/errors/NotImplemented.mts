import {
	type Errant,
	ErrorBase
} from '@vkno/errantly';


/**
 * @name NotImplementedError
 * @implements Errant
 * @classdesc thrown when a feature of the software has not been implemented, eg a function which only exists as a specification yet to be completed.
 */
export class NotImplementedError extends ErrorBase implements Errant {

	name = 'NotImplementedError';
	explanation = 'this error has been thrown as an unimplemented feature of the software (yet to be finished) has been invoked';

	public constructor(message:string = 'no message provided') {
		super(message);
	}



}
