import {
    GET_EMPLOYEES,
    GetEmployeesStateType,
    EmployeeActionTypes
  } from '../types/EmployeeTypes';
  
  const initialStateGetEmployees: GetEmployeesStateType = {
    employees: []
  };
  
  export const getEmployeesReducer = (
    state = initialStateGetEmployees,
    action: EmployeeActionTypes
  ): GetEmployeesStateType => {
    switch (action.type) {
      case  GET_EMPLOYEES:
        return {
          ...state,
          employees: action.payload
        };
      default:
        return state;
    }
  };
  