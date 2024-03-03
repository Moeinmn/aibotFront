
import axios from "axios";
import storageLocal from "../shared/helper/storge-local";


const mainApi = axios.create({
  baseURL: "http://localhost:3002/v1",
});
mainApi.interceptors.request.use(
  function (config) {
    const token = storageLocal.get("token");
    config.headers.Authorization = token?.length && token;
    return {
      ...config,
    };
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default mainApi;
