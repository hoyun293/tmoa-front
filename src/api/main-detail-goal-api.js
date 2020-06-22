import { _axios } from '../js/http-util';
export const saveHistory = (payload) => {
  return _axios.post('/historySave', payload);
};

export const history = (payload) => {
  return _axios.get('/history', {
    params: {
      goalId: payload.goalId,
      year: payload.year,
      pageNumber: payload.pageNumber,
    },
  });
};

export const deleteHistory = (payload) => {
  return _axios.post('/deleteHistory', payload);
};
