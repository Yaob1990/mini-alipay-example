import { promisifyJSApi } from '/common/utils';

export function getSystemInfo(): Promise<ISystemInfo> {
  return promisifyJSApi(my.getSystemInfo);
}

export function getSystemInfoSync(): ISystemInfo {
  return my.getSystemInfoSync();
}

export function getWindowHeight() {
  return getSystemInfoSync().windowHeight;
}

export function isBangScreen() {
  try {
    const { titleBarHeight, statusBarHeight } = getSystemInfoSync();
    return titleBarHeight + statusBarHeight > 66;
  } catch (err) {
    return false;
  }
}
