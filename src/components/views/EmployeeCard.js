import React, { useState, useEffect} from 'react'
import {Link, Route, useRouteMatch} from 'react-router-dom'
import {getAllEmployees} from '../../redux/actions'
import {connect} from 'react-redux'
import ProfilePage from './ProfilePage'

function EmployeeCard(props) {
    const {path, url} = useRouteMatch()
    

    useEffect(() => {
        props.getAllEmployees()
       
    }, [])
    

    return (
       <>
        <div className='card-container'>
            
         {props.employees.map(employee => (
                    <div className='card' key={employee.id}>
                        
                        <h4>{employee.first_name}  {employee.last_name}</h4>
                        <p>{employee.phone} {employee.email}</p>
                        <Link to={`/employee/${employee.id}`}><button>View</button></Link>
                        
                    </div>
                    
                ))}
                
                <Route path={`/employee/${path}`}><ProfilePage/></Route>
        </div>
        
       </>
    )
}

function mapStateToProps(state) {
    console.log("State", state)
    return {
        employees: state.employees
            
    }
}

export default connect(mapStateToProps, {getAllEmployees})(EmployeeCard);
// export default EmployeeList;