import {
    type Errant,
    ErrorBase,
} from '@vkno/errantly';


export class UnhandledException extends ErrorBase implements Errant {
    name = 'UnhandledException';
    explanation = 'raised when an exception has not been handled or the code has reached an unexpected condition';    
}