interface IGetBoundingClientRectResponse {
  width: number;
  height: number;
}

export function getBoundingClientRect(selector: string) {
  return new Promise<IGetBoundingClientRectResponse>((resolve, reject) => {
    try {
      my.createSelectorQuery()
        .select(selector)
        .boundingClientRect()
        .exec(ret => {
          resolve(ret[0]);
        });
    } catch (err) {
      reject(err);
    }
  });
}
