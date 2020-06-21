import { _axios } from '../js/http-util';
export const saveGoal = (payload) => {
  return _axios.post('/goalSave', payload).then((res) => {});
};

export const famousKeyword = (payload) => {
  return axios.get('/famousKeyword', {
    params: {
      category: payload.category,
    },
  });
};
