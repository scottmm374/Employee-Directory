import React, { useState, useEffect} from 'react'
import axios from 'axios'
import {getAllEmployees} from '../../redux/actions'
import {connect} from 'react-redux'

function EmployeeList(props) {
    // const [employees, setEmployees] = useState([])
    // console.log(props)

    useEffect(() => {
        props.getAllEmployees()
        // axios
        // .get('https://codechallenge.rivet.work/api/v1/profiles', {
        //     headers: {
        //         'token': 'XA8K6b8GSM5mGNN2v5Q3j6xUUwpkoPSx3zdxbAADwtzuHrexRHWi58rHZkRZJhf7'
        //     }
        // })
        // .then(res => {
        //     setEmployees(res.data);
        //     console.log(res.data)
        // })
        // .catch(err => {
        //     console.log("error", err)
        // })
    }, [])
    // console.log(props, "props")

    return (
        <div>
            
            {/* {props.error && <p> Error: {props.error}</p>} */}
            <ul>
                {props.employees.map(employee => (
                    <li key={employee.id}>{employee.first_name}</li>
                ))}
                
            </ul>
            
        </div>
    )
}

function mapStateToProps(state) {
    console.log("State", state)
    return {
        employees: state.employees.slice(60, 100)
            
    }
}

export default connect(mapStateToProps, {getAllEmployees})(EmployeeList);
// export default EmployeeList;