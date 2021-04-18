import { promisifyJSApi } from '/common/utils';

export function getLocation(params: IGetLocationParams = {}) {
  const { type = 1, ...rest } = params;
  return promisifyJSApi<IGetLocationResponse>(my.getLocation, {
    type,
    ...rest,
  });
}

export function openLocation(params: IOpenLocationParams) {
  return promisifyJSApi(my.openLocation, params);
}
