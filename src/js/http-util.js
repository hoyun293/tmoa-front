import axios from 'axios';
import config from '../config';

const _axios = axios.create({ baseURL: config.BASE_URL });
export default _axios;
