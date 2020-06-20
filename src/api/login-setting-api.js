import axios from '../js/http-util';

export const requestLogin = (payload) => {
  return axios.post('/login', payload);
};