import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { AppThunk } from '../index'
// import { RootState } from '../app/rootReducer'


export interface CurrentEmployeeState {
    isLoading: boolean;
    errors: string;
    currentEmployee: any;
}



 const initialState: CurrentEmployeeState = {
    isLoading: false,
    errors: '',
    currentEmployee: []
}

const currentEmployeeSlice = createSlice ({
    name: "currentEmployee",
    initialState,
    reducers: {
        setLoading: (state, {payload}: PayloadAction<boolean>) => {
            state.isLoading = payload
        },
        setCurrentEmployee: (state, { payload }: PayloadAction<[]>) => {
            state.currentEmployee = payload
            
        },
        // setErrors: (state, {payload}: PayloadAction<string>) => {
        //     state.errors: payload
        // },
    }


})

export const {setLoading, setCurrentEmployee} = currentEmployeeSlice.actions
export default currentEmployeeSlice.reducer
export const currentEmployeeSelector = (state: {currentEmployeeStore: CurrentEmployeeState}) => state.currentEmployeeStore

export const getById = (id:number | string): AppThunk => {
    return async dispatch => {
      dispatch(setLoading(true))
      try {
        
  
        const res = await axios.get(`https://codechallenge.rivet.work/api/v1/profile/${id}`, {
            headers: {
                'token': 'XA8K6b8GSM5mGNN2v5Q3j6xUUwpkoPSx3zdxbAADwtzuHrexRHWi58rHZkRZJhf7'
            }
        })
        dispatch(setLoading(false))
        dispatch(setCurrentEmployee(res.data))
      } catch (error) {
        console.log(error)
        dispatch(setLoading(false))
      }
    }
  }