// import axios from '../js/http-util';
import axios from '../js/http-util';

const requestLogin = (payload) => {
  return axios.post('/login', payload);
};

const isDuplicate = (nickname) => {
  const url = `nickname/${nickname}`;
  return axios.get(url);
};

export { requestLogin, isDuplicate };