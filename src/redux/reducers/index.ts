import { combineReducers } from 'redux';
import { getEmployeesReducer } from './EmployeesReducer';

const rootReducer = combineReducers({
  employees: getEmployeesReducer
});

export default rootReducer;