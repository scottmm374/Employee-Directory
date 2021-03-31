import { getCurrentEmployeeAction} from '../actions/CurrentEmployeeActions';
import { Dispatch } from 'redux';
import axios from 'axios'
import { CurrentEmployeeActionTypes } from '../types/CurrentEmployeeTypes';


export const getEmpById = (id:any) => {
  return function (dispatch: Dispatch<CurrentEmployeeActionTypes>) {
    axios
        .get(`https://codechallenge.rivet.work/api/v1/profile/${id}`, {
            headers: {
                'token': 'XA8K6b8GSM5mGNN2v5Q3j6xUUwpkoPSx3zdxbAADwtzuHrexRHWi58rHZkRZJhf7'
            }
        })
      .then(res => {
        console.log(res.data, "before" )
        dispatch(getCurrentEmployeeAction(res.data));
      }).catch(err => {
          console.log(err)
      })
  };
};