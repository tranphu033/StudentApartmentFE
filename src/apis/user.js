import customAxios from "./customAxios";

const userApi = {  
  login: (data) => {
    return customAxios.post(`/login`, data);
  },
};

export default userApi;
