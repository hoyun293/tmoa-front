import { _axiosUser } from '../js/http-util';
const saveHistory = (payload) => {
  return _axiosUser.post('/goals', payload);
};

export { saveHistory };