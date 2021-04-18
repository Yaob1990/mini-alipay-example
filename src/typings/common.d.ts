declare type IReturnType<T> = T extends (...args: any) => infer P ? P : any;

declare type IArgumentTypes<T> = T extends (...args: infer P) => any ? P : never;

declare type IObject<T = any> = Record<any, T>;

declare type IFunction<T extends any[] = any[], P = any> = (...args: T) => P;

declare type IGet<T, K, P = any> = K extends keyof T ? T[K] : P;
