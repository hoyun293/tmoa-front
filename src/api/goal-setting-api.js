import { _axios, _axiosUser } from '../js/http-util';
export const saveGoal = (payload) => {
  return _axiosUser.post('/goalSave', payload).then((res) => {});
};

export const famousKeyword = (payload) => {
  return _axiosUser.get('/famousKeyword', {
    params: {
      category: payload.category,
    },
  });
};