import axios from 'axios'


export const GET_ALL_PENDING = 'GET_ALL_PENDING';
export const GET_ALL_SUCCESS = 'GET_ALL_SUCCESS';
export const GET_ALL_ERROR = 'GET_ALL_ERROR';

export const GET_EMPLOYEE_PENDING = 'GET_EMPLOYEE_PENDING';
export const GET_EMPLOYEE_SUCCESS = 'GET_EMPLOYEE_SUCCESS';
export const GET_EMPLOYEE_ERROR = 'GET_EMPLOYEE_ERROR';

export const ADD_NEW_PENDING = 'ADD_NEW_PENDING';
export const ADD_NEW_SUCCESS = 'ADD_NEW_SUCCESS';
export const ADD_NEW_ERROR = 'ADD_NEW_ERROR';

export const UPDATE_PENDING= 'UPDATE_PENDING'
export const UPDATE_SUCCESS= 'UPDATE_SUCCESS'
export const UPDATE_ERROR= 'UPDATE_ERROR'


export function getAllEmployees(){
    return dispatch => {
        dispatch({type: GET_ALL_PENDING});

        axios
        .get('https://codechallenge.rivet.work/api/v1/profiles', {
            headers: {
                'token': 'XA8K6b8GSM5mGNN2v5Q3j6xUUwpkoPSx3zdxbAADwtzuHrexRHWi58rHZkRZJhf7'
            }
        })
        .then(res => {
            // console.log("res in action", res.data)
            dispatch({ type: GET_ALL_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: GET_ALL_ERROR, payload: err})
        })
    }
}
    export function getEmpById(id) {
    return dispatch => {
        dispatch({type: GET_EMPLOYEE_PENDING});

        axios
        .get(`https://codechallenge.rivet.work/api/v1/profile/${id}` , {
            headers: {
                'token': 'XA8K6b8GSM5mGNN2v5Q3j6xUUwpkoPSx3zdxbAADwtzuHrexRHWi58rHZkRZJhf7'
            }
        })
        .then(res => {
            console.log("res in byId", res.data)
            dispatch({ type: GET_EMPLOYEE_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: GET_EMPLOYEE_ERROR, payload: err})
        })
    }
    }

    

export function addEmployee (newEmployee) {
    return dispatch => {
        dispatch({type: ADD_NEW_PENDING});

        axios
        .post('https://codechallenge.rivet.work/api/v1/profile', newEmployee, {
            headers: {
                'token': 'XA8K6b8GSM5mGNN2v5Q3j6xUUwpkoPSx3zdxbAADwtzuHrexRHWi58rHZkRZJhf7'
            }
        })
        .then(res => {
            console.log("res in action", res.data)
            dispatch({ type: ADD_NEW_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: ADD_NEW_ERROR, payload: err})
        })
    }
}

export function update (id, employee) {
   return  dispatch => {
        dispatch({type: UPDATE_PENDING});

        axios
        .put(`https://codechallenge.rivet.work/api/v1/profile/${id}`, employee, {
            headers: {
                'token': 'XA8K6b8GSM5mGNN2v5Q3j6xUUwpkoPSx3zdxbAADwtzuHrexRHWi58rHZkRZJhf7'
            }
        })
        .then(res => {
            console.log("res update", res.data)
            dispatch({ type: UPDATE_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: UPDATE_ERROR, payload: err})
        })
    }
}
