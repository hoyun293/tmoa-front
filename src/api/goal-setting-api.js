import { _axios, _axiosUser } from '../js/http-util';
export const saveGoal = (payload) => {
  return _axiosUser.post('/goalSave', payload);
};
export const updateGoal = (payload) => {
  return _axiosUser.post('/goalUpdate', payload);
};
export const famousKeyword = (payload) => {
  return _axios.get('/famousKeyword', {
    params: {
      category: payload.category,
    },
  });
};
