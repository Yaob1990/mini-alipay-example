import { _, promiseFormatter } from '/common/utils';
import { alert, hideLoading, loading, toast } from './interaction';

function formatRPCOptions({
  headers = {},
  gateway,
  loadingText,
  loadingDelay = 0,
  showError = true,
  customErrorText,
}: IRPCOptions): IRPCOptions {
  return {
    headers,
    gateway,
    loadingText,
    loadingDelay,
    showError: !!showError,
    customErrorText,
  };
}

function getErrorType(errcode = 0) {
  if ([10, 5, 16].indexOf(errcode) > -1) {
    return 'network';
  }
  return 'error';
}

function showErrorText(type: 0 | 1, text?: string) {
  switch (type) {
    case 1:
      alert({ title: '错误', content: text || '' });
      break;
    default:
      toast(text);
      break;
  }
}

export async function nativeRpc<T>(
  operationType: string,
  requestData?: any,
  options: IRPCOptions = {},
): Promise<T> {
  const {
    loadingText,
    loadingDelay,
    showError,
    customErrorText,
    headers,
    gateway,
  } = formatRPCOptions(options);

  const showLoading = !!loadingText;

  if (showLoading) {
    loading({ content: loadingText, delay: loadingDelay });
  }

  const rpcParams = {
    operationType,
    requestData: [requestData],
    headers,
    gateway,
  };

  return new Promise<T>((resolve, reject) => {
    my.call('rpc', rpcParams, result => {
      if (_.get(result, 'success')) {
        resolve(result);
      } else {
        const errcode = +_.get(result, 'error', 0);
        const errtype = getErrorType(errcode);

        if (showError) {
          const { showType = 0 } = result || {};
          const errmsg = customErrorText || '系统繁忙，请稍后再试';
          showErrorText(showType, errmsg);
        }

        reject({
          errtype,
          ...(result || {}),
        });
      }
    });
  })
    .then(response => {
      if (showLoading) {
        hideLoading();
      }
      return response;
    })
    .catch(err => {
      if (showLoading) {
        hideLoading();
      }
      throw err;
    });
}

export async function rpc<T>(
  operationType: string,
  requestData?: any,
  options: IRPCOptions = {},
) {
  return promiseFormatter<T>(nativeRpc<T>(operationType, requestData, options));
}
