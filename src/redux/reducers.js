// import { isReturnStatement } from "typescript"

import {GET_ALL_SUCCESS, GET_ALL_PENDING, GET_ALL_ERROR} from './actions'

const initialState = {
    isLoading: false,
    error: null,
    employees: []
}

export function EmployeeReducer(state = initialState, action){
    switch(action.type) {
        case GET_ALL_PENDING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_ALL_SUCCESS: {
            return {
                ...state,
                employees: [...state.employees, ...action.payload],
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

        default:
            return state;
    }
}