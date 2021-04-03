import { useEffect} from 'react'
import {currentEmployeeSelector, getById} from "../../redux/currentEmployeeSlice"
import { useSelector, useDispatch } from "react-redux"
import {Link} from 'react-router-dom'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function ProfilePage(props:any): JSX.Element {
    const dispatch = useDispatch()
    const {currentEmployee} = useSelector(currentEmployeeSelector)
    const {id} = props.match.params

       useEffect(() => {
        dispatch(getById(id))
      
    },[dispatch, id])

    return (
        <div className="profile-page">
            <div className="header-profile">
                <h1>{currentEmployee.first_name}</h1>
                <Link to="/"><FontAwesomeIcon icon={faHome} className="home-button" size="3x"/></Link>
            </div>
                
            <div className="main-content">
                <div className="left-side">
                    <p><img src={`${currentEmployee.photo}`} alt={currentEmployee.first_name}/></p>
                    <h4>{currentEmployee.first_name} {currentEmployee.last_name}</h4>
                    <Link to="/update-employee"><button className="edit-button">Edit Profile</button></Link>
                    
                </div>

                <div className="sideways-profile-name">
                    <h2>{currentEmployee.last_name}</h2>
                </div>

                <div className="right-side">
                    <div className="information">
                        <div><h4>Phone: </h4>{currentEmployee.phone}</div>
                        <div><h4>Email: </h4>{currentEmployee.email}</div>
                        <div><h4>Street Address: </h4>{currentEmployee.address}</div>
                        <div><h4>City :</h4>{currentEmployee.city}</div> 
                        <div><h4>State:</h4>{currentEmployee.state}</div>
                        <div><h4>Zip Code:</h4>{currentEmployee.zip}</div>
                    </div>
                        
                    <div className="notes"><h4>Notes</h4><br/><br/>{currentEmployee.notes}</div>
                </div>

            </div>
            
        </div>
    )
}