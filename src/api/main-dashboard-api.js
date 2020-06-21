import axios from '../js/http-util';
export const goals = () => {
  return axios.get('/goals');
};
