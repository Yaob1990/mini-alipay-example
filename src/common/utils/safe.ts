import * as _ from './lodash';

export function safeJSONParse(str: string, parseErrorValue: any = {}) {
  try {
    return JSON.parse(str);
  } catch (error) {
    return parseErrorValue;
  }
}

export function safeJSONStringify(params: any) {
  try {
    if (typeof params === 'string') {
      return params;
    }
    return JSON.stringify(params);
  } catch (err) {
    return '';
  }
}

export function safeCall<T>(fn: T, ...args: IArgumentTypes<T>): IReturnType<T> {
  if (_.isFunction(fn)) {
    return fn(...args);
  }
}
