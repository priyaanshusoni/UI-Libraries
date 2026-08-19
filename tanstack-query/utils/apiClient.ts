import axios from "axios";
import type { AxiosRequestConfig } from "axios";

export const apiClient = ({ config }: { config: AxiosRequestConfig }) => {
  return axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/todos",
    headers: { "Content-Type": "application/json" },
    ...config,
  });
};
