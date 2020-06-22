import { _axios, _axiosUser } from '../js/http-util';
export const saveGoal = (payload) => {
<<<<<<< HEAD
  return _axios.post('/goalSave', payload);
};

export const famousKeyword = (payload) => {
  return _axios.get('/famousKeyword', {
    params: {
      category: payload.category,
    },
  });
};