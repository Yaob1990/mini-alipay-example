export function alert({ title, content, buttonText }: IAlertParams) {
  return my.alert({
    title,
    content,
    buttonText,
  });
}

export function toast(params: IToastParams | string) {
  const args = typeof params === 'string' ? { content: params } : params;
  return my.showToast(args);
}

export function loading(params: ILoadingParams | string) {
  const args = typeof params === 'string' ? { content: params } : params;
  return my.showLoading(args);
}

export function hideLoading(page?: any) {
  return my.hideLoading({ page });
}

export function confirm({
  title,
  content,
  confirmButtonText,
  cancelButtonText,
}: IConfirmParams) {
  return new Promise<boolean>((resolve, reject) => {
    my.confirm({
      title,
      content,
      confirmButtonText,
      cancelButtonText,
      success(result: any) {
        if (result?.confirm) {
          resolve(true);
        } else {
          resolve(false);
        }
      },
      fail(err) {
        reject(err);
      },
    });
  });
}
