import { _axios, _axiosUser } from '../js/http-util';

const getMyGoals = () => {
  const ALL_AT = 'Y';
  const url = `/goals?allYn=${ALL_AT}`;
  return _axiosUser.get(url);
};

const getMyCheerGoals = (pageNumber) => {
  const url = `/goalsLiked?pageNumber=${pageNumber}`;
  return _axiosUser.get(url);
}

const getFamousKeyword = () => {
  return _axios.get('/famousKeyword');
}

const getSearch = (searchWord, pageNumber) => {
  const url = `/search?searchWord=${searchWord}&pageNumber=${pageNumber}`;
  return _axios.get(url);
}

const getRecentGoals = (pageNumber) => {
  const url = `/search?pageNumber=${pageNumber}`;
  return _axios.get(url);
}

const insertLike = (params) => {
  return _axiosUser.post('/goalLike', params);
}

export { getMyGoals, getMyCheerGoals, getFamousKeyword, getSearch, getRecentGoals, insertLike };