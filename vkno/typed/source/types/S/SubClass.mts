/**
 * @name SubClass
 * @description a subclass of class T
 * @argument {Constructor/ClassRe} T 
 */
export type SubClass<T> = { new (...args: any[]): T; };
