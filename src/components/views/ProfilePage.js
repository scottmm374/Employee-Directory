import React, { useEffect} from 'react'
// import axios from 'axios'
import {connect} from 'react-redux'
import {getEmpById} from '../../redux/actions'
import UpdateEmployee from '../forms/UpdateEmployee'
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
            <div className="header_profile"><h1>{props.employee.first_name}</h1><Link to="/"><FontAwesomeIcon icon={faHome} className="home_button" size="3x">Home</FontAwesomeIcon></Link></div>
            
           <div className="main-content">
            <div className="left-side">
                <p><img src={`${props.employee.photo}`} alt={props.employee.first_name}/></p>
                <Link to="/update-employee"><button className="edit_button">Edit Profile</button></Link>
            
            </div>
            <div className="sideways-right">
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