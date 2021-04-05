import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { AppThunk } from '../index'


export interface CurrentEmployeeState {
    isLoading: boolean,
    errors: string,
    isUpdating: boolean,
    didUpdate: boolean,
    currentEmployee: any,
    
}

 const initialState: CurrentEmployeeState = {
    isLoading: false,
    isUpdating: false,
    didUpdate: false,
    errors: '',
    currentEmployee: [],
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
        setIsUpdating: (state, { payload }: PayloadAction<boolean>) => {
            state.isUpdating = payload
            // state.currentEmployee = payload
            
        },
        setUpdate: (state, { payload }: PayloadAction<[]>) => {
            state.currentEmployee = payload
            
        },
        setErrors: (state, {payload}: PayloadAction<string>) => {
            state.errors = payload
        }
    }


})

export const {setLoading, setCurrentEmployee, setIsUpdating, setUpdate} = currentEmployeeSlice.actions
export default currentEmployeeSlice.reducer
export const currentEmployeeSelector = (state: {currentEmployeeStore: CurrentEmployeeState}) => state.currentEmployeeStore



export const getById = (id:number | string): AppThunk => {
    return  dispatch => {
      dispatch(setLoading(true))
        axios.get(`https://codechallenge.rivet.work/api/v1/profile/${id}`, {
            headers: {
                'token': 'XA8K6b8GSM5mGNN2v5Q3j6xUUwpkoPSx3zdxbAADwtzuHrexRHWi58rHZkRZJhf7'
            }
        }).then(res => {
          dispatch(setCurrentEmployee(res.data))

        }).then(() => {
          dispatch(setLoading(false))

        }).catch (error => {
        console.log(error)
        dispatch(setLoading(false))
      })
    
  }
}
  
  
  export const update = (id:number | string, updateEmployee:any): AppThunk => {
    console.log("Update param in update",updateEmployee)
     return dispatch => {
      dispatch(setIsUpdating(true))
      
         axios.put(`https://codechallenge.rivet.work/api/v1/profile/${id}`, updateEmployee, {
            headers: {
                'token': 'XA8K6b8GSM5mGNN2v5Q3j6xUUwpkoPSx3zdxbAADwtzuHrexRHWi58rHZkRZJhf7'
            }
          }).then(res => {
            console.log(res.data, "Update")
            dispatch(setUpdate(res.data))

          }).then(() => {
            dispatch(setIsUpdating(false))

          }).catch (error => {
        console.log(error)
        dispatch(setLoading(false))
      })
    }
  }
  
    