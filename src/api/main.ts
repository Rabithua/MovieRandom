import axios from "axios";
import env from "../env";

const randomOneApi = () => {
  console.log(`${env.apiUrl}/randomone`);
  return new Promise((resolve, reject) => {
    axios
      .get(`${env.apiUrl}/randomone`)
      .then((response) => {
        // 请求成功，将响应数据传递给resolve
        resolve(response.data);
      })
      .catch((error) => {
        // 请求失败，将错误信息传递给reject
        reject(error);
      });
  });
};

export { randomOneApi };
