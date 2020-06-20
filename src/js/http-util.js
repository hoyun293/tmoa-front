import axios from 'axios';
import config from '../config';

const _axios = axios.create({ baseURL: config.BASE_URL });
const _axiosUser = axios.create({ baseURL: config.BASE_URL, header:{} });

export { _axios, _axiosUser };
