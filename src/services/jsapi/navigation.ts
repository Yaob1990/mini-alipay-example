import { promisifyJSApi } from '/common/utils';

export function setNavigationBar(params: ISetNavigationBarParams) {
  return promisifyJSApi(my.setNavigationBar, params);
}
