import {
    type Errant
} from '@vkno/errantly';

import {
    type ArgumentName
} from '@vkno/typed';


import {
    ErrorBase
} from './ErrorBase.mts';

export class ArgumentError extends ErrorBase implements Errant {
    name = 'ArgumentError';
    explanation = 'thrown when an argument was an unexpected in some form.';
    constructor( argument: ArgumentName, reason: string ) {
        super(`argument ${argument} has produced an error - ${reason}`)
    }
}
