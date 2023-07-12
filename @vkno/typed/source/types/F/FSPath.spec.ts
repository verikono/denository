// import {
//     describe,
//     it,
//     expectDuckType
// } from "@vkno/typed.devel";

// import {
//     type FSPath,
//     isFSPath,
// } from '@vkno/typed';



// describe(`@vkno/typed.FSPath`, () => {

//     describe(`FSPath`, () => {

//         it.skip(`brands __fs and __path when unoptioned`, () =>
//             expectDuckType<{ __fs: true; __path:true; }, FSPath>('/some/path' as FSPath, isFSPath));

//         it.skip(`functions only accept a file branded argument if optioned`, () => {
//             // const testType = (value:FSPath): void => { value; };
//             // const file = 'somefile' as FSPath<'file'>;
//             // testType(file);
//             // const directory = 'somedir' as FSPath<'directory'>;
//             // testType(directory);
//             // const entry = 'someentry' as FSPath<'entry'>;
//             // testType(entry);
//         });

//     });


//     describe(`FSPath<'file'>`, () => {

//         it.skip(`brands __fs, __path and __file when optioned`, () =>
//             expectDuckType<{ __fs: true; __path:true; __file: true; }, FSPath<'file'>>('/directory/file.txt' as FSPath<'file'>, isFSPath<'file'>));

//         it.skip(`functions only accept a file branded argument if optioned`, () => {
//             const testType = (value:FSPath<'file'>): void => { value; };
//             const file = 'somefile' as FSPath<'file'>;
//             testType(file);
//             // const directory: FSPath<'directory'> = 'somedir';
//             // testType(directory);
//             // const entry: FSPath<'entry'> = 'someentry';
//             // testType(entry);
//         });

//     });

//     describe(`FSPath<'directory'>`, () => {

//         it.skip(`brands __directory when optioned`, () =>
//             expectDuckType<{ __fs: true; __path: true; __directory: true; }, FSPath<'directory'>>('/directory/subdir/' as FSPath<'directory'>, isFSPath<'directory'>));

//         it.skip(`functions only accept a file branded argument if optioned`, () => {
//             const testType = (value:FSPath<'directory'>): void => { value; };
//             const directory = 'somedir' as FSPath<'directory'>;
//             testType(directory);
//             // const file: FSPath<'file'> = 'somefile';
//             // testType(file);
//             // const entry: FSPath<'entry'> = 'someentry';            
//             // testType(entry);
//         });

//     });


// });
