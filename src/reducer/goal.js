export const GOAL_SETTING_CATEGORY = 'GOAL_SETTING_CATEGORY';
export const GOAL_SETTING_INFO = 'GOAL_SETTING_INFO';
export const GOAL_SETTING_AMOUNT = 'GOAL_SETTING_AMOUNT';
export const GOAL_SETTING_PLAN = 'GOAL_SETTING_PLAN';

export const initialState = {
  category: '',
  targetName: '',
  startDate: new Date().toLocaleDateString,
  endDate: new Date().toLocaleDateString,
  tags: '',
  targetAmount: '',
  savingCode: '',
  savingDetailCdoe: '',
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
    case GOAL_SETTING_INFO: {
      return {
        ...state,
        amount: action.amount,
      };
    }
    case GOAL_SETTING_PLAN: {
      return {
        ...state,
        savingCode: action.data.savingCode,
        savingDetailCdoe: action.data.savingDetailCdoe,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
