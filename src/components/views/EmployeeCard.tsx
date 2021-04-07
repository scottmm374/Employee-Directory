import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import { employeesSelector, getAllEmployees } from "../../redux/employeesSlice"
import { useSelector, useDispatch, createDispatchHook } from "react-redux"
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Card, CardColumns} from 'react-bootstrap'

export default function EmployeeCard(): JSX.Element {
    const dispatch = useDispatch()
    const {employees} = useSelector(employeesSelector)
//    console.log(employees, "Employees cards")

    useEffect(() => {
        dispatch(getAllEmployees())
       
    }, [dispatch])
    
    

    return (
      <>
        <CardColumns className='card-container'>
       
         {employees.map(employee => (
              <Link to={`/employee/${employee.id}`}>
                    <Card  style={{width: "15rem"}} className='card-main' key={employee.id}>
                        <Card.Body>

                        <div className='top-card-section'>
                       <Card.Img style={{width: "160px"}} className="card-img" src={`${employee.photo}`} alt={employee.first_name}/>
                        {/* <div className="name-card"> */}
                            <Card.Subtitle className="first-name-card">{employee.first_name} {employee.last_name}</Card.Subtitle> 
                            </div>  
                       <Card.Text  className="card-icons-container">

                      
                        {/* <div className='icons-card'> */}
                         <p className="card-icons-circle" ><FontAwesomeIcon icon={faPhoneAlt} /></p>
                        <p className="card-icons-circle"><FontAwesomeIcon icon={faEnvelope} /></p>
                       
                        </Card.Text>
                        {/* <Link to={`/employee/${employee.id}`}><button className="view-profile-button">View</button></Link> */}
            
                        </Card.Body>
                        
                        
                    </Card>
                    </Link>
                ))}
                
        </CardColumns>
       </>
    )
}