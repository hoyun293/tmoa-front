import { _axiosUser } from '../js/http-util';

const getMyGoals = () => {
  return _axiosUser.get('/goals');
};

export { getMyGoals };