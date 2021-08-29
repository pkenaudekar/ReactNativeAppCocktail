import { combineReducers } from 'redux';
import drinkReducer from './drinkReducer';

export default combineReducers({
  drinks: drinkReducer,
});
