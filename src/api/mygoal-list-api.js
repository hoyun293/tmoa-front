import { _axios, _axiosUser } from '../js/http-util';

const getMyGoals = () => {
  return _axiosUser.get('/goals');
};

const getMyCheerGoals = (pageNumber) => {
  const url = `/goalsLiked?pageNumber=${pageNumber}`;
  return _axiosUser.get(url);
}

const getFamousKeyword = () => {
  return _axios.get('/famousKeyword');
}

export { getMyGoals, getMyCheerGoals, getFamousKeyword };