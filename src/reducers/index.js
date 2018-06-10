import { combineReducers } from 'redux';
import ItemReducer from './reducer_item';
import CompleteReducer from './reducer_complete';

const rootReducer = combineReducers({
  itemList: ItemReducer,
  completeList: CompleteReducer
});

export default rootReducer;
