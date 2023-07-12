import { ErrorBase } from './ErrorBase.mts';

import { 
	type Errant,
} from './types/Errant.mts';


/**
 * @name NotImplementedError
 * @implements Errant
 * @classdesc thrown when a feature of the software has not been implemented, eg a function which only exists as a specification yet to be completed.
 */
export class GuardError extends ErrorBase implements Errant {
	name = 'GuardError';
	explanation = 'a type guard has been optioned to throw, thus this is a validation and that validation has failed.';
	guardedType: string;

	constructor(type: string, message:string = 'no message provided') {
		super(message);
		this.guardedType = type;
	}
}
