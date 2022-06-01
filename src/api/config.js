// eslint-disable-next-line
import Cookies from "js-cookie"; //
import axios from "axios";

const { REACT_APP_API_ORIGIN } = process.env;

let BASE_URL = REACT_APP_API_ORIGIN;

/* you can also do this without env variables:

if (process.env.NODE_ENV === "development") {
  BASE_URL = "https://xxxxx"
} else {
  BASE_URL = "https://xxxxx" 
}

 */

const ax = axios.create({
  baseURL: BASE_URL,
  // `responseType` 表示浏览器将要响应的数据类型
  // 选项包括: 'arraybuffer', 'document', 'json', 'text', 'stream'
  // 浏览器专属：'blob'
  // responseType: "json", // 默认值
});

// request

ax.interceptors.request.use(
  (config) => {
    if (config.method === "post") {
      if (config?.data?.isFormData) {
        config.headers.post["Content-Type"] = "multipart/form-data";
        config.data = config.data.formData;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response

ax.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { ax };

/*
axios# get(    url         [, config]  )
axios# post(   url [, data [, config]] )
axios# put(    url [, data [, config]] )
axios# delete( url         [, config] )

axios#patch(url[, data[, config]])
axios#head(url[, config])
axios#options(url[, config])
axios#getUri([config])
*/
