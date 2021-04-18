declare interface IAlertParams {
  title?: string;
  content?: string;
  buttonText?: string;
}

declare interface ILoadingParams {
  content?: string;
  delay?: number;
}

declare interface IToastParams {
  content?: string;
  type?: 'none' | 'success' | 'fail' | 'exception';
  duration?: number;
}

declare interface IConfirmParams {
  title?: string;
  content?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
}
