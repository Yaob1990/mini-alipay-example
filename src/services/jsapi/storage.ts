import { promisifyJSApi } from '/common/utils';

export async function getStorage<T = any>(key: string): Promise<T> {
  const res = await promisifyJSApi<{ data: T }>(my.getStorage, {
    key,
  });
  return res.data;
}

export function getStorageSync<T = any>(key: string): T {
  return my.getStorageSync({ key }).data;
}

export async function setStorage<T>(key: string, value: T): Promise<T> {
  if (!key) {
    return;
  }
  await promisifyJSApi<T>(my.setStorage, {
    key,
    data: value,
  });
  return value;
}

export function setStorageSync<T>(key: string, value: T) {
  my.setStorageSync({ key, data: value });
  return value;
}
