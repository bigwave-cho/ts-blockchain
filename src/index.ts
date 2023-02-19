//# 1. LocalStorage 기능 구현해보기

interface SStorage<T> {
  [key: string]: T;
}

abstract class LocalStorage<T> {
  protected storage: SStorage<T> = {};
  constructor() {
    this.storage = {};
  }
  abstract length(): number;
  abstract setItem(key: string, value: T): void;
  abstract getItem(key: string): T;
  abstract clearItem(key: string): void;
  abstract clear(): void;
}

class StringStorage extends LocalStorage<string> {
  constructor() {
    super();
  }

  length(): number {
    return Object.keys(this.storage).length;
  }
  setItem(key: string, value: string) {
    if (this.storage[key] !== undefined) {
      console.log('이미 존재');
      return;
    }
    this.storage[key] = value;
    console.log(this.storage[key]);
  }

  getItem(key: string): string {
    if (this.storage[key]) {
      return this.storage[key];
    } else {
      return `${key}라는 단어가 없어유`;
    }
  }

  clearItem(key: string) {
    if (this.storage[key]) {
      delete this.storage[key];
      console.log(`${key} 삭제완료`);
    } else {
      console.log(`${key}가 없는디요?`);
    }
  }
  clear() {
    this.storage = {};
    console.log('비웠수다');
  }
}

const stringsStorage = new StringStorage();
stringsStorage.setItem('스토리지', '로컬');
stringsStorage.setItem('로컬', '스토리지');
stringsStorage.getItem('로컬');
stringsStorage.clearItem('로컬');
stringsStorage.clear();

// # 2. Geolocation API
// geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
type GeolocationCoords = {
  latitude: number;
  longitude: number;
  altitude: number;
  accuracy: number;
  altitudeAccuracy: number;
  heading: number;
  speed: number;
};

type Position = {
  coords: GeolocationCoords;
};

type GeoError = {
  code: number;
  message: string;
};

type SuccessFn = (position: Position) => void;
type ErrorFn = (error: GeoError) => void;

interface GeoOptions {
  maximumAge: number;
  timeout: number;
  enableHighAcuuracy: boolean;
}
type GetCurrentPosition = {
  (suceessFn: SuccessFn): void;
  (suceessFn: SuccessFn, errorFn: ErrorFn): void;
  (suceessFn: SuccessFn, errorFn: ErrorFn, optionsObj: GeoOptions): void;
};

type WatchPosition = {
  (suceessFn: SuccessFn): number;
  (suceessFn: SuccessFn, errorFn?: ErrorFn): number;
  (suceessFn: SuccessFn, errorFn?: ErrorFn, optionsObj?: GeoOptions): number;
};

interface GeolocationAPI {
  getCurrentPosition: GetCurrentPosition;
  watchPosition: WatchPosition;
  clearWatch: (id: number) => void;
}

class Geolocator implements GeolocationAPI {
  getCurrentPosition: GetCurrentPosition = (
    success: SuccessFn,
    error?: ErrorFn,
    options?: GeoOptions
  ) => {
    return; // Implementation goes here :)
  };
  watchPosition: WatchPosition = (
    success: SuccessFn,
    error?: ErrorFn,
    options?: GeoOptions
  ) => {
    return 1; // Implementation goes here :)
  };
  clearWatch = (id: number) => {};
}
