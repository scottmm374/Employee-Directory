import React, { useState, useEffect} from 'react'
import {getAllEmployees} from '../../redux/actions'
import {connect} from 'react-redux'

function EmployeeList(props) {
    // const [employees, setEmployees] = useState([])
    // console.log(props)

    useEffect(() => {
        props.getAllEmployees()
       
    }, [props])
    

    return (
        <div>
        <div className='card-container'>
         {props.employees.map(employee => (
                    <div className='card' key={employee.id}>
                        
                        <h4>{employee.first_name}  {employee.last_name}</h4>
                        <p>{employee.phone} {employee.email}</p>
                       
                        
                    </div>
                ))}

               
        </div>
     
        </div>  
    )
}

function mapStateToProps(state) {
    console.log("State", state)
    return {
        employees: state.employees
            
    }
}

export default connect(mapStateToProps, {getAllEmployees})(EmployeeList);
// export default EmployeeList;