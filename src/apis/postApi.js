import customAxios from "./customAxios";

const prefix = "/posts";
const postApi = {
  getList: (params) => {
    let query = `${prefix}?sortType=${params.sortType || 0}&district=${params.district || ""}&ward=${params.ward || ""}&street=${params.street || ""}&priceMin=${params.priceMin || ""}&priceMax=${params.priceMax || ""}&areaMin=${params.areaMin || ""}&areaMax=${params.areaMax || ""}`;
    if (params.type) {
      params.type?.forEach((item) => {
        query = query + `&type[]=${item}`;
      });
    }
    return customAxios.get(query);
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
};

export default postApi;
