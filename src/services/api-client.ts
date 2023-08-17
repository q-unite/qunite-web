/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  auth = (config: AxiosRequestConfig) => {
    return axiosInstance.post<T>(this.endpoint, config).then((res) => res.data);
  };
}

export default APIClient;
