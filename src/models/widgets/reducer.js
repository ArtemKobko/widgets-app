import { SET_WIDGET, DELETE_WIDGET, UPDATE_WIDGET } from './constants';

const initialState = {
  allWidgets: {

  },
};

function widgetsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WIDGET:
      return {
        ...state,
        allWidgets: {
          ...state.allWidgets,
          ...action.payload,
        },
      };
    case DELETE_WIDGET:
      const newAllWidgets = { ...state.allWidgets };
      delete newAllWidgets[action.payload];
      if (Object.keys({ ...state.allWidgets }).length > 1) {
        return {
          ...state,
          allWidgets: newAllWidgets,
        };
      } return {
        ...state,
        allWidgets: {
          ...state.allWidgets,
        },
      };
    case UPDATE_WIDGET:
      return {
        ...state,
        allWidgets: {
          ...state.allWidgets,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}

export default widgetsReducer;
