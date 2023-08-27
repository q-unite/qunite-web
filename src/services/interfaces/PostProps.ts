import { AxiosRequestConfig } from "axios";

export interface PostProps {
  data?: AxiosRequestConfig;
  additional?: string;
}
