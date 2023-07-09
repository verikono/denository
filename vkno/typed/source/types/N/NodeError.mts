export declare type NodeError = {
    code: NodeErrorCode;
    errno: NodeErrorNo;
}

export declare type NodeErrorCode = keyof NodeErrorCodeMap;

export declare type NodeErrorNo = NodeErrorCodeMap[keyof NodeErrorCodeMap];

export declare type NodeErrorCodeMap = {
    EACCES: -13;
    EISDIR: -21;
    ENOTDIR: -20;
    ENOENT: -2;
}

export function isNodeError(value:unknown): value is NodeError {
    if(typeof value === 'object' && !Array.isArray(value) && value !== null) {
        if('code' in value) return true;
    }
    return false;
} 