import {combineReducers} from 'redux';
import auth from './auth_reducer';
import prog from './prog_reducer';

export default combineReducers({
    auth,
    prog
});