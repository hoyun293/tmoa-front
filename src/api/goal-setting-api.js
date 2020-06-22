import { _axios } from '../js/http-util';
export const saveGoal = (payload) => {
  return _axios.post('/goalSave', payload);
};

export const famousKeyword = (payload) => {
  return _axios.get('/famousKeyword', {
    params: {
      category: payload.category,
    },
  });
};
