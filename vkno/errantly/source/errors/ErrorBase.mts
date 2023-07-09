import {
	type FSURL,
	type ClassName,
	type FunctionName,
	type LineNumber,
	type ColumnNumber
} from '@vkno/typed';


/**
 * @name ErrorBase
 * @classdesc an Error Base class
 * @property {FSURL<'file'>} file the filesystem URL where this error was raised.
 * @property {ClassName} class the type/class name where this error was raised, null is provided if the error occured outside of a class instance.
 * @property {FunctionName} function the name of the function/method where this error was raised, null is provided if the error occured outside of a function.
 * @property {LineNumber} line the line number in the file where this error was raised.
 * @property {ColumnNumber} column the columnar position in the file where this error was raised.
 */
export class ErrorBase extends Error {

	name = 'ErrorBase';
	file: FSURL<'file'>;
	className: ClassName | null;
	functionName: string | null;
	line: number;
	column: number;

	constructor(message: string = 'no message provided.') {
		super(message);
		Object.setPrototypeOf(this, ErrorBase.prototype);
		this.message = message || 'no message provided';
		[
			this.file,
			this.className,
			this.functionName,
			this.line,
			this.column,
		] = this.parseErrorStack();
	}

	private parseErrorStack(): [FSURL<'file'>, ClassName, FunctionName, LineNumber, ColumnNumber] {
		const { stack } = this;
		if (stack) {
			const [memberPartial, filePartial] = 
				stack
					.split('\n')[1]
					.replace(/\ /g, '')
					.slice(2)
					.split(/[\(\)]/);
			const [className, member] = memberPartial.split('.');
			const [protocol, locator, line, column] = filePartial.split(':');
			const urlSpec = [protocol, locator].join(':');
			return [
				Object.assign(new URL(urlSpec), { __file: true }) as FSURL<'file'>,
				className as ClassName,
				member as FunctionName,
				parseInt(line, 10) as LineNumber,
				parseInt(column, 10) as ColumnNumber,
			];
		}
		throw new Error(`no stack present.`);
	}

	protected pretty(message: string): string {
		const { className, functionName, line, column, file } = this;
		const title = `---- ${this.name} ----`;
		const tail = new Array(title.length).fill('-').join('');

		return [
			`---- ${this.name} ---`,
			`message: ${message}`,
			className ? 'class: ${className}' : null,
			functionName ? `${className ? 'method' : 'function'}: ${functionName}` : null,
			`file: ${file.pathname}`,
			`line: ${line.toString()}`,
			`column: ${column.toString()}`,
			this.stack,
			tail
		].join('\n');
	}
}
