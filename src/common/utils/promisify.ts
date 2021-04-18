/**
 * promisify all jsapi
 */
export function promisifyJSApi<T>(func: IFunction, args: any): Promise<T> {
  return new Promise((resolve, reject) => {
    func({
      ...args,
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      },
    });
  });
}

/**
 * format response of promise to Array
 * - when without error
 *    the response is [undefined, Expect Response]
 * - when catch error
 *    the response is [Error, undefined]
 */
export function promiseFormatter<T>(
  promise: Promise<T>,
): Promise<[(Error & IObject) | undefined, T | undefined]> {
  return promise
    .then(res => [void 0, res])
    .catch((err: Error) => [err, void 0]) as any;
}
