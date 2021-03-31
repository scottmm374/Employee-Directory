import {
    GET_CURRENT_EMPLOYEE,
    GetCurrentEmployeeStateType,
    CurrentEmployeeActionTypes
  } from '../types/CurrentEmployeeTypes';
  
  const initialStateGetCurrentEmployee: GetCurrentEmployeeStateType = {
    currentEmployee: []
  };

  console.log(initialStateGetCurrentEmployee)

  // export const getSingleEmpReducer = (
  //   state = initialStateGetSingleEmp,
  //   action: SingleEmpActionTypes
  // ): GetSingleEmpStateType => {
  //   switch (action.type) {
  //     case  GET_SINGLE_EMP:
  //       return {
  //         ...state,
  //         ...action.payload
  //       };
  //     default:
  //       return state;
  //   }
  // };
  
  export const getCurrentEmployeeReducer = (
    state = initialStateGetCurrentEmployee,
    action: CurrentEmployeeActionTypes
  ): GetCurrentEmployeeStateType => {
    switch (action.type) {
      case  GET_CURRENT_EMPLOYEE:
        return {
          ...state,
          currentEmployee: action.payload
        };
      default:
        return state;
    }
  };
  