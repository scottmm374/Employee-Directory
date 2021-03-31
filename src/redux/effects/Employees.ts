import { getEmployeeAction } from '../actions/EmployeeActions';
import { Dispatch } from 'redux';
import axios from 'axios'
import { EmployeeActionTypes } from '../types/EmployeeTypes';


export const getAllEmployees = () => {
  return function (dispatch: Dispatch<EmployeeActionTypes>) {
    axios
        .get('https://codechallenge.rivet.work/api/v1/profiles', {
            headers: {
                'token': 'XA8K6b8GSM5mGNN2v5Q3j6xUUwpkoPSx3zdxbAADwtzuHrexRHWi58rHZkRZJhf7'
            }
        })
      .then(res => {
        console.log(res.data, "employee action")
        dispatch(getEmployeeAction(res.data));
        // return res;
      }).catch(err => {
          console.log(err)
      })
  };
};