declare interface ILaLo {
  longitude: string | number;
  latitude: string | number;
}

declare interface IGetLocationParams {
  cacheTimeout?: string;
  type?: number;
}

declare interface IGetLocationResponse extends ILaLo {
  accuracy: string;
  horizontalAccuracy: string;
  country: string;
  countryCode: string;
  province: string;
  city: string;
  cityAdcode: string;
  district: string;
  districtAdcode: string;
  /**
   * type > 1 存在
   */
  streetNumber: {
    street: string;
    number: string;
  };
  pois: any;
}

declare interface IOpenLocationParams {
  longitude: string;
  latitude: string;
  name: string;
  address: string;
  scale?: number;
}
