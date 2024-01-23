import { STORAGE_KEYS } from "../../types/storage";

class StorageUtil {
  static setAccessToken(accessToken: string): void {
    return localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
  }

  static getAccessToken(): string | null {
    return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
  }

  static removeAccessToken(): void {
    return localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
  }
}

export default StorageUtil;
