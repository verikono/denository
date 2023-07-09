import { ErrorBase } from "@vkno/errantly";

export function raiseError(ErrorType: typeof ErrorBase, message: string ): never {
    throw new ErrorType(message);
}
