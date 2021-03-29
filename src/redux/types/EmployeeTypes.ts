import {Employee} from '../interfaces/Employee'

export const GET_EMPLOYEES = 'GET_EMPLOYEES'

// definig what state will look like
export interface GetEmployeesStateType {
    employees: Employee[]
}

// defining what action types
interface GetEmployeesActionType {
    type: typeof GET_EMPLOYEES;
    payload: Employee[]
}

export type EmployeeActionTypes =  GetEmployeesActionType