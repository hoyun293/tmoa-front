import { _axios } from '../js/http-util';

const requestLogin = (payload) => {
  return _axios.post('/login', payload);
};

const isDuplicate = (nickname) => {
  const url = `nickname/${nickname}`;
  return _axios.get(url);
};

export { requestLogin, isDuplicate };