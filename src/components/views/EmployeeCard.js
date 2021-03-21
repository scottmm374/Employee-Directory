import  {useEffect} from 'react'
import {Link, useRouteMatch} from 'react-router-dom'
import {getAllEmployees} from '../../redux/actions'
import {connect} from 'react-redux'

function EmployeeCard(props) {

    useEffect(() => {
        props.getAllEmployees()
       
    }, [])
    

    return (
       <>
        <div className='card-container'>
         {props.employees.map(employee => (
                    <div className='card' key={employee.id}>

                        <img className="card-img" src={`${employee.photo}`} alt={employee.first_name}/>
                        <h4 className="name-card">{employee.first_name}  {employee.last_name}</h4>
                        <p className="icons-card">{employee.phone} {employee.email}</p>
                        <Link to={`/employee/${employee.id}`}><button className="view-profile-button">View</button></Link>
                    </div>
                ))}
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