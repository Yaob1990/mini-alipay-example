declare interface ISystemInfo {
  /**
   * 手机型号
   */
  model: string;
  /**
   * 设备像素比
   */
  pixelRatio: number;
  /**
   * 窗口宽度
   */
  windowWidth: number;
  /**
   * 窗口高度
   */
  windowHeight: number;
  /**
   * 支付宝设置的语言
   */
  language: string;
  /**
   * 支付宝版本号
   */
  version: string;
  /**
   * 设备磁盘容量
   * @version 1.1.1
   */
  storage: string;
  /**
   * 当前电量百分比
   * @version 1.1.1
   */
  currentBattery: string;
  /**
   * 系统版本
   * @version 1.1.1
   */
  system: string;
  /**
   * 系统名：Android，iOS / iPhone OS
   * @version 1.1.1
   */
  platform: string;
  /**
   * 标题栏高度
   * @version 1.1.1
   */
  titleBarHeight: number;
  /**
   * 状态栏高度
   * @version 1.1.1
   */
  statusBarHeight: number;
  /**
   * 屏幕宽度
   * @version 1.1.1
   */
  screenWidth: number;
  /**
   * 屏幕高度
   * @version 1.1.1
   */
  screenHeight: number;
  /**
   * 手机品牌
   * @version 1.4.0
   */
  brand: string;
  /**
   * 用户设置字体大小
   * @version 1.4.0
   */
  fontSizeSetting: number;
  /**
   * 当前运行的客户端，当前是支付宝则有效值是 "alipay"
   */
  app: string;
  /**
   * 设备是否开启无障碍
   */
  screenReaderEnabled: boolean;
}
