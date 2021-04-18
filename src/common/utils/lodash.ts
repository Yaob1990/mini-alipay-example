/**
 * lodash 部分方法会使用到 window
 * 小程序里会报错，故采用该方式
 */
import concat from 'lodash/concat';
import difference from 'lodash/difference';
import differenceBy from 'lodash/differenceBy';
import filter from 'lodash/filter';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import get from 'lodash/get';
import groupBy from 'lodash/groupBy';
import includes from 'lodash/includes';
import isArray from 'lodash/isArray';
import isFunction from 'lodash/isFunction';
import isNil from 'lodash/isNil';
import map from 'lodash/map';
import pick from 'lodash/pick';
import startsWith from 'lodash/startsWith';
import uniq from 'lodash/uniq';
import uniqBy from 'lodash/uniqBy';

export function findByKey<T>(collection: T[], value, key: keyof T) {
  return find(collection, o => value === o[key]);
}

export function isPlainObject(input: any) {
  return Object.prototype.toString.call(input) === '[object Object]';
}

export function isEmpty(input: any) {
  if (isPlainObject(input)) {
    return Object.keys(input).length <= 0;
  } else if (isArray(input)) {
    return input.length <= 0;
  }
  return !input;
}

export function debounce(fn: IFunction, delay = 0, ctx?: any) {
  let timer;
  return function _() {
    clearTimeout(timer);
    const args = Array.prototype.slice.call(arguments);
    timer = setTimeout(() => {
      fn.apply(ctx, args);
    }, delay);
  };
}

export {
  differenceBy,
  difference,
  concat,
  isArray,
  map,
  filter,
  find,
  findIndex,
  get,
  isFunction,
  includes,
  startsWith,
  pick,
  isNil,
  groupBy,
  uniq,
  uniqBy,
};
