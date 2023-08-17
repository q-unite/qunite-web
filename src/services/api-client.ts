/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios, { AxiosRequestConfig } from "axios";
import authStore from "../stores/auth-store";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const { token } = authStore.getState();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  auth = (config: AxiosRequestConfig) => {
    return axiosInstance.post<T>(this.endpoint, config).then((res) => res.data);
  };

  get = () => {
    return axiosInstance.get<T>(this.endpoint).then((res) => res.data);
  };
}

export default APIClient;
