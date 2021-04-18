declare interface IImaspParams {
  scene?: string;
  touchPoint?: string;
  booth: string[] | string;
}

declare interface IImaspResponse {
  code: string;
  success: boolean;
}

declare interface IImaspQueryResponse<ContentInfos = any> extends IImaspResponse {
  contentInfos: ContentInfos;
}

declare interface IImaspContentInfoModel<ExtInfos = IObject> {
  type: 'content' | 'coupon' | 'mark' | 'task' | 'item';
  contentId: string;
  scene: string;
  touchPoint: string;
  booth: string;
  title: string;
  subTitle: string;
  name: string;
  logo: string;
  linkUrl: string;
  desc: string;
  tag: string;
  priority: string;
  extInfos: ExtInfos;
}

declare type IContentQueryParams = IImaspParams & IObject;

declare type IUserApplyParams<T = IObject> = IImaspParams & T & {
  contentId: string;
}

declare type ICouponStatus = 'noReceive' | 'notBegin' | 'todayEnded' | 'received' | 'stoped' | 'ended';
