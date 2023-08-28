/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios, { AxiosRequestConfig } from "axios";
import authStore from "../stores/auth-store";
import { PostProps } from "./interfaces";

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

  get = (additional?: string) => {
    const url =
      additional !== undefined ? this.endpoint + additional : this.endpoint;

    return axiosInstance.get<T>(url).then((res) => res.data);
  };

  post = ({ data, additional }: PostProps) => {
    return axiosInstance
      .post<T>(
        this.endpoint + (additional ? additional : ""),
        data ? data.params : null
      )
      .then((res) => res.data);
  };

  delete = (additional: string) => {
    return axiosInstance.delete(this.endpoint + (additional ? additional : ""));
  };
}

export default APIClient;
