import { combineReducers } from 'redux';
import {
    CHANGE_DATE_TIME
} from './actions';

function liveData(state = {}, action) {
    switch(action.type) {
        case CHANGE_DATE_TIME:
            return Object.assign({}, state, { dateTime: action.dateTime });
        default:
            return state;
    }
}

const reducers = combineReducers({ liveData });

export default reducers;