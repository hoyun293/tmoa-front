export const GOAL_SETTING_INFO = 'GOAL_SETTING_INFO';

export const initialState = {
  category: '',
  goalName: '',
  startDate: new Date().toLocaleDateString,
  endDate: new Date().toLocaleDateString,
  tags: [],
  goalAmount: '',
  savingAmount: '',
  savingCode: '',
  savingDetailCode: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GOAL_SETTING_INFO: {
      return {
        ...state,
        category: action.data.category,
        goalName: action.data.goalName,
        startDate: action.data.startDate,
        endDate: action.data.endDate,
        tags: action.data.tags,
        goalAmount: action.data.goalAmount,
        savingAmount: action.data.savingAmount,
        savingCode: action.data.savingCode,
        savingDetailCode: action.data.savingDetailCode,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
