import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { AppThunk } from '../index'
// import { RootState } from '../app/rootReducer'


export interface EmployeesState {
    isLoading: boolean;
    isAddNew:boolean;
    errors: string;
    employees : any;
    
}



 const initialState: EmployeesState = {
    isLoading: false,
    isAddNew: false,
    errors: '',
    employees: [],
    
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
        setIsAddNew: (state, {payload}: PayloadAction<boolean>) => {
            state.isAddNew = payload       
         },

         setAddEmployee: (state, {payload}: PayloadAction<[]>) =>{
             state.employees.push(payload)
         },

        setErrors: (state, {payload}: PayloadAction<string>) => {
            state.errors =  payload
        },
    }


})



export const {setLoading, setEmployees, setIsAddNew, setAddEmployee , setErrors} = employeesSlice.actions
export default employeesSlice.reducer
export const employeesSelector = (state: {employeesStore: EmployeesState}) => state.employeesStore

export const getAllEmployees = (): AppThunk => {
    return  dispatch => {
      dispatch(setLoading(true))
      
        
        axios.get('https://codechallenge.rivet.work/api/v1/profiles', {
            headers: {
                'token': 'XA8K6b8GSM5mGNN2v5Q3j6xUUwpkoPSx3zdxbAADwtzuHrexRHWi58rHZkRZJhf7'
            }
        }).then(res => {
          dispatch(setLoading(false))
          dispatch(setEmployees(res.data))
          dispatch(setLoading(false))

        }).catch (error => {
        dispatch(setErrors(error.message))
        
      })
    }
  }
  
  export const addNewEmployee = (newEmployee:any): AppThunk => {
    return  dispatch => {
      dispatch(setIsAddNew(true))
        axios.post('https://codechallenge.rivet.work/api/v1/profile', newEmployee, {
            headers: {
                'token': 'XA8K6b8GSM5mGNN2v5Q3j6xUUwpkoPSx3zdxbAADwtzuHrexRHWi58rHZkRZJhf7'
            }
        }).then(res => {
          console.log(res.data, "add emp reducer")
          dispatch(setAddEmployee(res.data))
        }).then(()=> {
          dispatch(setIsAddNew(false))
        }).then (() => {
            dispatch(setLoading(false))
        }).catch(error => {
          dispatch(setErrors(error.message))
          })
    }
  }
    

  // export const getAllEmployees = (): AppThunk => {
  //   return async dispatch => {
  //     dispatch(setLoading(true))
  //     try {
        
  //       const res = await axios.get('https://codechallenge.rivet.work/api/v1/profiles', {
  //           headers: {
  //               'token': 'XA8K6b8GSM5mGNN2v5Q3j6xUUwpkoPSx3zdxbAADwtzuHrexRHWi58rHZkRZJhf7'
  //           }
  //       })
  //       dispatch(setLoading(false))
  //       dispatch(setEmployees(res.data))
  //     } catch (error) {
  //       dispatch(setErrors(error.message))
  //       dispatch(setLoading(false))
  //     }
  //   }
  // }
  
  // export const addNewEmployee = (newEmployee:any): AppThunk => {
  //   return async dispatch => {
  //     dispatch(setIsAddNew(true))
  //     try {
        
  //        const res = await axios.post('https://codechallenge.rivet.work/api/v1/profile', newEmployee ,{
  //           headers: {
  //               'token': 'XA8K6b8GSM5mGNN2v5Q3j6xUUwpkoPSx3zdxbAADwtzuHrexRHWi58rHZkRZJhf7'
  //           }
  //       })
  //         console.log(res.data, "add emp reducer")
  //         dispatch(setIsAddNew(false))
  //         dispatch(setAddEmployee(res.data))

        
        
  //     } catch (error) {
  //       console.log(error)
  //       dispatch(setLoading(false))
  //     }
  //   }
  // }
    
