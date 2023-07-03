import {
    describe,
    it,
    expect,
} from 'dev_deps';

import {
    isFSEntry,
} from '@vkno/typed';



describe(`@vkno/typed.FSEntry`, () => {

    describe(`isFSEntry`, () => {

        describe(`passes`, () => {
            it(`FSPath`, () => expect(isFSEntry('/unverified')).toBe(true));
            it(`FSPath<'file'>`, () => expect(isFSEntry<'file'>('/unverified/file.txt')).toBe(true));
            it(`FSPath<'directory'>`, () => expect(isFSEntry<'directory'>('/unverified/subdir/')).toBe(true));
        });

        describe(`failes`, () => {
            it(`FSPath<'directory'> when last char is not a /`, () => expect(isFSEntry<'directory'>('/unverified/subdir')).toBe(false));
        });

    });

});
