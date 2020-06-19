import axios from '../js/http-util';
export const saveGoal = (payload) => {
  return axios.post('/goalSave', payload).then((res) => {
    console.log(res);
  });
};
