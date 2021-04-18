
declare interface IRPCOptions {
  /**
   * @description headers
   * @default {}
   */
  headers?: any;
  gateway?: string;
  /**
   * @description 加载前置菊花, 有则显示菊花等待请求
   */
  loadingText?: string | null;
  /**
   * @description 菊花停留时间, 默认为 0, 即请求结束后自动隐藏菊花
   * @default 0
   */
  loadingDelay?: number;
  /**
   * @description 是否显示错误
   */
  showError?: boolean;
  /**
   * @description 自定义错误提示文案
   */
  customErrorText?: string | null;
}
