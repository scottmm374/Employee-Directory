import  {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import {getAllEmployees} from '../../redux/effects/Employees'
import {Employee} from '../../redux/interfaces/Employee'
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {AppState} from '../../redux/store/index'


export default function EmployeeCard() : JSX.Element{

    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getAllEmployees())
       
    }, [dispatch])
    
    const employees = useSelector((state: AppState) => state.employees)
   
    console.log(" EMployees in dash", employees)
  

    return (
       <>
        <div className='card-container'>
        
         {employees.employees.map((employee: Employee) => (
                    <div className='card' key={employee.id}>
                        <div className='top-card-section'>
                        <div><img className="card-img" src={`${employee.photo}`} alt={employee.first_name}/></div>
                        <div className="name-card"><h4 className="first-name-card">{employee.first_name}</h4> <h4 className="last-name-card">{employee.last_name}</h4> </div>
                        <div className='icons-card'><div className="card-icons" ><FontAwesomeIcon icon={faPhoneAlt} /></div><div className="card-icons"><FontAwesomeIcon icon={faEnvelope} /></div></div>
                        </div>
                        <Link to={`/employee/${employee.id}`}><button className="view-profile-button">View</button></Link>
                        
                    </div>
                ))}
        </div>
       </>
    )
}

// function mapStateToProps(state: EmpProps[]) {
//     console.log("State", state)
//     return {
//         employees: state.employees.splice(98)
//     }
// }

// export default connect(mapStateToProps, {getAllEmployees})(EmployeeCard);