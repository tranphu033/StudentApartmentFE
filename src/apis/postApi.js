import customAxios from "./customAxios";

const prefix = "/posts";
const postApi = {
  getList: (params) => {
    return customAxios.get(`${prefix}?sortType=${params?.sortType || 0}`);
  },
}

export default postApi;
