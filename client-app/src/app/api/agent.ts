import axios, { AxiosResponse } from "axios";
import { IPageInfo } from "../model/pageinfo";

axios.defaults.baseURL = "http://localhost:7071/api";

export const sleep = (ms: number) => (response: AxiosResponse) =>
  new Promise<AxiosResponse>((resolve) =>
    setTimeout(() => {
      resolve(response);
    }, ms)
  );

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  put: (url: string) => axios.put(url).then(responseBody),
};

const Counter = {
  get: (id: string, page: string): Promise<string> =>
    requests.get(`/getcounter?page=${page}&id=${id}`),
  update: (id: string, page: string, counter: string) =>
    requests.put(`/updatecounter?id=${id}&page=${page}&counter=${counter}`),
};

export default Counter;
