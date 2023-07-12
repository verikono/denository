import { ErrorBase } from './ErrorBase.mts';

import { 
	type Errant,
} from './types/Errant.mts';


export class UnhandledException extends ErrorBase implements Errant {
    name = 'UnhandledException';
    explanation = 'raised when an exception has not been handled or the code has reached an unexpected condition';    
}