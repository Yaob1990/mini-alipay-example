import { _, promisifyJSApi } from '/common/utils';
import { Router } from 'herbjs';

export function navigateTo(url: string) {
  if (!url) {
    return;
  }
  Router.push(url.trim());
}

export function navigateBack(delta = 1) {
  Router.popTo(delta);
}

export function redirectTo(url: string) {
  if (!url) {
    return;
  }
  Router.redirectTo(url.trim());
}

export function switchTab(url: string) {
  if (!url) {
    return;
  }
  Router.switchTab(url.trim());
}

/**
 * 获取应用路由栈
 */
export function getRouteStack() {
  try {
    return getCurrentPages();
  } catch (err) {
    return [];
  }
}

/**
 * 获取当前路由
 * 小程序内目前为当前 page 实例
 */
export function getCurrentRoute<T = any>(): T {
  return getRouteStack().pop();
}

export function getCurrentRouteProperty(key: string, defaultValue?: any) {
  return _.get(getCurrentRoute(), key, defaultValue);
}

/**
 * 获取前一个路由
 * 小程序内目前为当前 page 实例
 */
export function getPrevRoute() {
  const stack = getRouteStack();
  if (_.isArray(stack) && stack.length > 1) {
    return stack.slice(-2, -1)[0];
  }
}

export interface IStartAppOptions {
  closeCurrentApp?: boolean;
  appClearTop?: boolean;
  startMultApp?: 'YES' | 'NO';
}

export function startApp(url: string, options: IStartAppOptions = {}) {
  if (!url) {
    return;
  }
  const {
    closeCurrentApp = false,
    startMultApp = 'YES',
    appClearTop = false,
  } = options;
  my.call('startApp', {
    appId: '20000067',
    param: {
      url: url.trim(),
      appClearTop,
      startMultApp,
    },
    closeCurrentApp,
  });
}

export function navigateToMiniProgram(
  appId: string,
  path: string,
  extraData?: IObject,
) {
  return promisifyJSApi(my.navigateToMiniProgram, {
    appId,
    path,
    extraData,
  });
}
