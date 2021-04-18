import { promisifyJSApi } from '/common/utils';

export function getImageInfo(url: string) {
  return promisifyJSApi<IGetImageInfoResponse>(my.getImageInfo, {
    src: url,
  });
}
