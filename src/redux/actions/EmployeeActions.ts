import { GET_EMPLOYEES, EmployeeActionTypes } from '../types/EmployeeTypes';
import { Employee } from '../interfaces/Employee';

export const getEmployeeAction = (employees: Employee[]): EmployeeActionTypes => {
  return {
    type: GET_EMPLOYEES,
    payload: employees
  };
};
