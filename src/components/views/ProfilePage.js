import React, { useEffect} from 'react'
import {connect} from 'react-redux'
import {getEmpById} from '../../redux/actions'
import {Link} from 'react-router-dom'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ProfilePage = (props) => {
    const {id} = props.match.params

       useEffect(() => {
        props.getEmpById(id)
      
    },[])

    return (
        <div className="profile-page">
            <div className="header-profile">
                <h1>{props.employee.first_name}</h1>
                <Link to="/"><FontAwesomeIcon icon={faHome} className="home-button" size="3x"/></Link>
            </div>
                
            <div className="main-content">
                <div className="left-side">
                    <p><img src={`${props.employee.photo}`} alt={props.employee.first_name}/></p>
                    <h4>{props.employee.first_name} {props.employee.last_name}</h4>
                    <Link to="/update-employee"><button className="edit-button">Edit Profile</button></Link>
                    
                </div>

                <div className="sideways-profile-name">
                    <h2>{props.employee.last_name}</h2>
                </div>

                <div className="right-side">
                    <div className="information">
                        <div><h4>Phone: </h4>{props.employee.phone}</div>
                        <div><h4>Email: </h4>{props.employee.email}</div>
                        <div><h4>Street Address: </h4>{props.employee.address}</div>
                        <div><h4>City :</h4>{props.employee.city}</div> 
                        <div><h4>State:</h4>{props.employee.state}</div>
                    </div>
                        
                    <div className="notes"><h4>Notes</h4><br/><br/>{props.employee.notes}</div>
                </div>

            </div>
            
        </div>
    )
}

function mapStateToProps(state) {
    console.log("State", state)
    return {
        employee: state.currentEmployee
    }
}

export default connect(mapStateToProps, {getEmpById})(ProfilePage);