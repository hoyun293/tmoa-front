import axios from '../js/http-util';
export const saveHistory = (payload) => {
  return axios.post('/goals', payload);
};
