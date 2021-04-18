import { API, IMASP_CONTANTS } from '/common/constants';
import { rpc } from '../jsapi';

export async function contentQuery<T>(params: IContentQueryParams) {
  const { scene, touchPoint, booth, ...rest } = params;
  return await rpc<T>(API.IMASP_QUERY, {
    scene: scene || IMASP_CONTANTS.scene,
    touchPoint: touchPoint || IMASP_CONTANTS.touchPoint,
    booth,
    ...rest,
  });
}

export async function userapply<T>(
  params: IUserApplyParams<T>,
  options?: IRPCOptions,
) {
  return await rpc(API.IMASP_USER_APPLY, params, options);
}

export async function reportBehavior(
  { scene, touchPoint, booth, contentId }: IContentQueryParams,
  behavior: string,
) {
  const params = {
    scene: scene || IMASP_CONTANTS.scene,
    touchPoint: touchPoint || IMASP_CONTANTS.touchPoint,
    booth,
    contentId,
    operateType: 'behaviorFeedBack',
    extParams: {
      behavior,
    },
  };
  return await rpc(API.IMASP_USER_APPLY, params, {
    showError: false,
  });
}
