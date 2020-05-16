export const GOAL_SETTING_CATEGORY = 'GOAL_SETTING_CATEGORY';
export const GOAL_SETTING_INFO = 'GOAL_SETTING_INFO';
export const GOAL_SETTING_AMOUNT = 'GOAL_SETTING_AMOUNT';
export const GOAL_SETTING_PLAN = 'GOAL_SETTING_PLAN';

export const initialState = {
  category: '',
  targetName: '',
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
    case GOAL_SETTING_CATEGORY: {
      return {
        ...state,
        category: action.category,
      };
    }
    case GOAL_SETTING_INFO: {
      return {
        ...state,
        targetName: action.data.targetName,
        startDate: action.data.startDate,
        endDate: action.data.endDate,
        tags: action.data.tags,
      };
    }
    case GOAL_SETTING_AMOUNT: {
      return {
        ...state,
        goalAmount: action.amount,
      };
    }
    case GOAL_SETTING_PLAN: {
      return {
        ...state,
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
