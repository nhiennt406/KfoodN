import axios from "axios";
import * as Config from "./Config";

export default function CallApi(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`,
    data: body,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  }).catch((err) => {
    console.log(err);
  });
}
