export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';

export const initialState = {
  me: null,
  isLoggedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
        isLoggedIn: true,
        me: action.data.me,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
