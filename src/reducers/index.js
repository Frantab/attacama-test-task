import { combineReducers } from 'redux';

import patientsReducer from './patientsReducer';
import relativesReducer from './relativesReducer';
import phonesReducer from './phonesReducer';


export default combineReducers({
    patients: patientsReducer,
    relatives: relativesReducer,
    phones: phonesReducer
});