import customAxios from "./customAxios";

const prefix = "/posts";
const postApi = {
  getList: (params) => {
    return customAxios.get(`${prefix}?sortType=${params?.sortType || 0}`);
  },
  getPostDetail: (id) => {
    return customAxios.get(`${prefix}/${id}`);
  },
  getHotNews: () => {
    return customAxios.get(`${prefix}/featured`);
  },
  getSimilarPosts: (price, area, type) => {
    return customAxios.get(`${prefix}/similar?price=${price}&area=${area}&type=${type}`);
  }
}

export default postApi;
