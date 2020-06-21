import axios from '../js/http-util';
export const saveGoal = (payload) => {
  return axios.post('/goalSave', payload).then((res) => {
    console.log(res);
  });
};

export const famousKeyword = (payload) => {
  //const url = `/famousKeyword/${payload.category}`;

  return axios.get('/famousKeyword', {
    params: {
      category: payload.category,
    },
  });
};
