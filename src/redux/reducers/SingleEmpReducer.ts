import {
    GET_SINGLE_EMP,
    GetSingleEmpStateType,
    SingleEmpActionTypes
  } from '../types/SingleEmpTypes';
  
  const initialStateGetSingleEmp: GetSingleEmpStateType = {
    singleEmp: []
  };

  console.log(initialStateGetSingleEmp)

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
  
  export const getSingleEmpReducer = (
    state = initialStateGetSingleEmp,
    action: SingleEmpActionTypes
  ): GetSingleEmpStateType => {
    switch (action.type) {
      case  GET_SINGLE_EMP:
        return {
          ...state,
          singleEmp: action.payload
        };
      default:
        return state;
    }
  };
  