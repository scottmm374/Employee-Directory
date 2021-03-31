import { GET_CURRENT_EMPLOYEE, CurrentEmployeeActionTypes } from '../types/CurrentEmployeeTypes';
import { CurrentEmployee } from '../interfaces/CurrentEmployee';

export const getCurrentEmployeeAction = (currentEmployee: CurrentEmployee[]): CurrentEmployeeActionTypes => {
  console.log(getCurrentEmployeeAction)
  return {
    type: GET_CURRENT_EMPLOYEE,
    payload: currentEmployee
  };
};
