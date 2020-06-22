import { _axios } from '../js/http-util';
export const goals = () => {
  return _axios.get('/goals');
};
