import {combineReducers } from 'redux';
import loggedInReducer from './loggedInReducer';

const allReducers  = combineReducers({
    loggedIn:loggedInReducer
})

export default allReducers;