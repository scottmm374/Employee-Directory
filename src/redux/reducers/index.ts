import { combineReducers } from 'redux';
import { getEmployeesReducer } from './EmployeesReducer';
import {getCurrentEmployeeReducer} from './CurrentEmployeeReducer'

const rootReducer = combineReducers({
  employees: getEmployeesReducer,
  currentEmployee: getCurrentEmployeeReducer
});

export default rootReducer;