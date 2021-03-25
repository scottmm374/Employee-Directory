import  {useEffect} from 'react'
import {Link, useRouteMatch} from 'react-router-dom'
import {getAllEmployees} from '../../redux/actions'
import {connect} from 'react-redux'
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EmployeeCard(props) {

    useEffect(() => {
        props.getAllEmployees()
       
    }, [])
    

    return (
       <>
        <div className='card-container'>
         {props.employees.map(employee => (
                    <div className='card' key={employee.id}>
                        <div className='top-card-section'>
                        <div><img className="card-img" src={`${employee.photo}`} alt={employee.first_name}/></div>
                        <div className="name-card"><h4 className="first-name-card">{employee.first_name}</h4> <h4 className="last-name-card">{employee.last_name}</h4> </div>
                        <div className='icons-card'><div className="card-icons" ><FontAwesomeIcon icon={faPhoneAlt}  >{employee.phone}</FontAwesomeIcon></div><div className="card-icons"><FontAwesomeIcon icon={faEnvelope} >{employee.email}</FontAwesomeIcon></div></div>
                        </div>
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