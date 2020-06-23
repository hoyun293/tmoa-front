import { _axios } from '../js/http-util';

const requestLogin = (payload) => {
  return _axios.post('/login', payload);
};

const isDuplicate = (nickname) => {
  const url = `nickname/${nickname}`;
  return _axios.get(url);
};

const isSigned = (email) => {
  const url = `email?email=${email}`;
  return _axios.get(url);
};

export { requestLogin, isDuplicate, isSigned };