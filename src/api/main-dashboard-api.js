import { _axiosUser } from '../js/http-util';
export const goals = () => {
  return _axiosUser.get('/goals');
};

export const goalsLiked = (payload) => {
  return _axiosUser.get('/goalsLiked', {
    params: {
      pageNumber: payload.pageNumber,
    },
  });
};
