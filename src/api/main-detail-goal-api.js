import { _axios, _axiosUser } from '../js/http-util';
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
  return _axios.post('/historySave', payload);
};

export const fetchGoal = (payload) => {
  return _axiosUser.get('/goal', {
    params: {
      goalId: payload.goalId,
    },
  });
};

export const deleteGoal = (payload) => {
  return _axiosUser.post('/goalDelete', payload);
};
