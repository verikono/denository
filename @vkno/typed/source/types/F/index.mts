export {
    type FSEntry,
    type FSEntryType,
    type FSEntryTypeBrand,
    isFSEntry,
    processFSGuardOptionsSync,
    fsEntryExistsSync,
    fsEntryIsReadableSync,
    fsEntryIsWriteableSync,
    fsEntryIsExecutableSync
} from './FSEntry.ts';

export type {
    FSEntryName
} from './FSEntryName.mts';

export {
    type FSGuard,
    type FSGuardOptions,
    fsGuardDefaults,
} from './FSGuard.ts';

export {
    type FSPath,
    type FSPathType,
    isFSPath,
    toFSPath,
} from './FSPath.ts';

export {
    type FSURL,
    isFSURL,
} from './FSURL.ts';

export {
    type FSUrlSpec,
    isFSUrlSpec,
    toFSUrlSpec,
} from './FSUrlSpec.ts';

export {
    type FunctionName,
} from './FunctionName.ts';
