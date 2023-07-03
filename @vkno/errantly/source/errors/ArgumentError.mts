import {
    type Errant,
    ErrorBase
} from '@vkno/errantly';

import {
    type ArgumentName
} from '@vkno/typed';


export class ArgumentError extends ErrorBase implements Errant {
    name = 'ArgumentError';
    explanation = 'thrown when an argument was an unexpected in some form.';
    constructor( argname: ArgumentName ):
}