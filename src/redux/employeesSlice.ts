import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { AppThunk } from '../index'
// import { RootState } from '../app/rootReducer'


export interface EmployeesState {
    isLoading: boolean;
    didAddNew: boolean;
    errors: string;
    employees : any;
    currentEmployee: any;
}

// export interface Employee {
//     id: number | string
//     first_name: string,
//         last_name: string,
//         phone: string,
//         email: string,
//         address: string,
//         city: string,
//         state: string,
//         zip: string,
//         photo?: string | null | undefined,
//         notes?: string | null | undefined,
// }

 const initialState: EmployeesState = {
    isLoading: false,
    didAddNew: false,
    errors: 'You Caused an Error!!!',
    employees: [],
    currentEmployee: []
}

 const employeesSlice = createSlice ({
    name: "employees",
    initialState,
    reducers: {
        setLoading: (state, {payload}: PayloadAction<boolean>) => {
            state.isLoading = payload
        },
        setEmployees: (state, { payload }: PayloadAction<[]>) => {
            state.employees = payload
            
        },
        // setErrors: (state, {payload}: PayloadAction<string>) => {
        //     state.errors: payload
        // },
    }


})

export const {setLoading, setEmployees} = employeesSlice.actions
export default employeesSlice.reducer
export const employeesSelector = (state: {employeesStore: EmployeesState}) => state.employeesStore

export const getAllEmployees = (): AppThunk => {
    return async dispatch => {
      dispatch(setLoading(true))
      try {
        
  
        const res = await axios.get('https://codechallenge.rivet.work/api/v1/profiles', {
            headers: {
                'token': 'XA8K6b8GSM5mGNN2v5Q3j6xUUwpkoPSx3zdxbAADwtzuHrexRHWi58rHZkRZJhf7'
            }
        })
        dispatch(setLoading(false))
        dispatch(setEmployees(res.data))
      } catch (error) {
        console.log(error)
        dispatch(setLoading(false))
      }
    }
  }
  
    

    
