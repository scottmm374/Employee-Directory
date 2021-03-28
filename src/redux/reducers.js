// import { isReturnStatement } from "typescript"

import {GET_ALL_SUCCESS, GET_ALL_PENDING, GET_ALL_ERROR,ADD_NEW_PENDING,ADD_NEW_SUCCESS,
    ADD_NEW_ERROR, GET_EMPLOYEE_PENDING, GET_EMPLOYEE_SUCCESS, GET_EMPLOYEE_ERROR, UPDATE_PENDING, UPDATE_SUCCESS, UPDATE_ERROR} from './actions'

const initialState = {
    isLoading: false,
    isAddingEmployee:false,
    didAddEmployee: false,
    isUpdatingEmployee:false,
    error: '',
    employees: [],
    currentEmployee:[]
}

 export function rootReducer(state = initialState, action){
    switch(action.type) {
        case GET_ALL_PENDING: {
            return {
                ...state,
                isLoading: true,
                error: ' '
            }
        }
        case GET_ALL_SUCCESS: {
            return {
                ...state,
                employees:  action.payload,
                isLoading: false
            }
            
        }
        case GET_ALL_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }
        case GET_EMPLOYEE_PENDING: {
                return {
                    ...state,
                    isLoading: true,
                    error: ' '
                }
            }
        case GET_EMPLOYEE_SUCCESS: {
                return {
                    ...state,
                    currentEmployee: action.payload,
                    isLoading: false
                }
                
            }
            case GET_EMPLOYEE_ERROR: {
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload
                }
        }
        case ADD_NEW_PENDING: {
            return {
                ...state,
                isAddingEmployee: true,
                
            }
        }
        case ADD_NEW_SUCCESS: {
            return {
                ...state,
                employees: [...state.employees, action.payload],
                didAddEmployee: true
            }
            
        }
        case ADD_NEW_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }
        case UPDATE_PENDING: {
            return {
                ...state,
                isUpdatingEmployee: true,
                
            }
        }
        case UPDATE_SUCCESS: {
            return {
                ...state,
                currentEmployee: action.payload
                
            }
            
        }
        case UPDATE_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }

        default:
            
            return state;
    }
}
