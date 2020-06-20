import { _axios } from '../js/http-util';
export const saveGoal = (payload) => {
  return _axios.post('/goalSave', payload).then((res) => {
    console.log(res);
  });
};