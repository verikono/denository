import type {
    Specifier
} from '@vkno/typed';

export declare type UrlSpec = string & Specifier<'unique', 'host'>;
