import { combineReducers } from 'redux';
import widgetsReducer from '../models/widgets/reducer';

const rootReducer = combineReducers({
  widgets: widgetsReducer,
});

export default rootReducer;
