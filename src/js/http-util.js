import axios from 'axios';
import config from '../config';

let userId = (function() {
  if(window.ABridge) return window.ABridge.getPreference('_id');
  return 'abcd1234';
})();

const _axios = axios.create({ baseURL: config.BASE_URL });
const _axiosUser = axios.create({ baseURL: config.BASE_URL, headers:{ userId } });

export { _axios, _axiosUser };
