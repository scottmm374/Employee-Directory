// import { isReturnStatement } from "typescript"

import {GET_ALL_SUCCESS, GET_ALL_PENDING, GET_ALL_ERROR} from './actions'

const initialState = {
    isLoading: false,
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

        default:
            
            return state;
    }
}
