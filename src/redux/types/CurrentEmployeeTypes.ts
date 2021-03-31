import {CurrentEmployee} from '../interfaces/CurrentEmployee'

export const GET_CURRENT_EMPLOYEE = 'GET_CURRENT_EMPLOYEE'

// definig what state will look like
export interface GetCurrentEmployeeStateType {
    currentEmployee: CurrentEmployee[]
}

// defining what action types
interface GetCurrentEmployeeActionType {
    type: typeof GET_CURRENT_EMPLOYEE;
    payload: CurrentEmployee[]
}

export type CurrentEmployeeActionTypes =  GetCurrentEmployeeActionType