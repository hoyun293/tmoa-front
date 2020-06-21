import axios from 'axios';
import config from '../config';

const _axios = axios.create({ baseURL: config.BASE_URL });
const _axiosUser = axios.create({ baseURL: config.BASE_URL, headers: { userId: 'abcd1234' } });

export { _axios, _axiosUser };
