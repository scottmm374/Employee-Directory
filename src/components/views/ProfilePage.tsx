import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getEmpById} from '../../redux/effects/CurrentEmployee'
import {CurrentEmployee} from '../../redux/interfaces/CurrentEmployee'
import {Link} from 'react-router-dom'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {AppState} from '../../redux/store/index'
import { CurrentEmployee } from '../../redux/interfaces/CurrentEmployee';


export default function ProfilePage(props: any): JSX.Element {
    const {id} = props.match.params
    
    const dispatch = useDispatch()

       useEffect(() => {
        dispatch(getEmpById(id))
      
    },[dispatch, id])

    const employee: CurrentEmployee = useSelector((state: AppState) => state.currentEmployee, {}) 
    console.log(employee, "single")
   
    

    return (
        <div className="profile-page">
            <div className="header-profile">
                {/* <h1>{employee.first_name}</h1>
                <Link to="/"><FontAwesomeIcon icon={faHome} className="home-button" size="3x"/></Link>
            </div>
                
            <div className="main-content">
                <div className="left-side">
                    <p><img src={`${employee.photo}`} alt={employee.first_name}/></p>
                    <h4>{employee.first_name} {employee.last_name}</h4>
                    <Link to="/update-employee"><button className="edit-button">Edit Profile</button></Link>
                    
                </div>

                <div className="sideways-profile-name">
                    <h2>{employee.last_name}</h2>
                </div>

                <div className="right-side">
                    <div className="information">
                        <div><h4>Phone: </h4>{employee.phone}</div>
                        <div><h4>Email: </h4>{employee.email}</div>
                        <div><h4>Street Address: </h4>{employee.address}</div>
                        <div><h4>City :</h4>{employee.city}</div> 
                        <div><h4>State:</h4>{employee.state}</div>
                    </div>
                        
                    <div className="notes"><h4>Notes</h4><br/><br/>{employee.notes}</div>  
                </div> */}

            </div>
            
        </div>
    )
}

// function mapStateToProps(state) {
//     console.log("State", state)
//     return {
//         employee: state.currentEmployee
//     }
// }

// export default connect(mapStateToProps, {getEmpById})(ProfilePage);