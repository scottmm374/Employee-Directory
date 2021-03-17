// import { isReturnStatement } from "typescript"

import {GET_ALL_SUCCESS, GET_ALL_PENDING, GET_ALL_ERROR,ADD_NEW_PENDING,ADD_NEW_SUCCESS,ADD_NEW_ERROR } from './actions'

const initialState = {
    isLoading: false,
    isAddingEmployee:false,
    didAddEmployee: false,
    error: '',
    employees: []
}

 export function reducer(state = initialState, action){
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
                employees: action.payload,
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

        default:
            
            return state;
    }
}
