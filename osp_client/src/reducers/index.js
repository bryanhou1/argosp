import { combineReducers } from 'redux';
import sequencesReducer from './sequencesReducer';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
  routing: routerReducer,
  sequencesReducer
});