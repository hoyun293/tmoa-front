import { _axiosUser } from '../js/http-util';
export const goals = () => {
  return _axiosUser.get('/goals');
};
