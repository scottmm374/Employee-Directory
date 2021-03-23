import React, { useEffect} from 'react'
// import axios from 'axios'
import {connect} from 'react-redux'
import {getEmpById} from '../../redux/actions'
import UpdateEmployee from '../forms/UpdateEmployee'
import {Link} from 'react-router-dom'

const ProfilePage = (props) => {
    const {id} = props.match.params

       useEffect(() => {
        props.getEmpById(id)
      
    },[])

    return (
        <div className="profile-page">
           
            <div className="left-side">
            <div className="header_first_name"><h1>{props.employee.first_name}</h1></div>
                <img src={`${props.employee.photo}`} alt={props.employee.first_name}/>
                <Link to="/update-employee"><span></span>
           <span></span>
           <span></span>
           <span></span><button className="edit_button">Edit Profile</button></Link>
            
            </div>
            <div className="sideways-right">
                    <h2>{props.employee.last_name}</h2>
                </div>

            <div className="right-side">
            <p><h4>Phone :</h4>{props.employee.phone}</p>
            <p><h4>Email :</h4>{props.employee.email}</p>
            <p><h4>Street Address :</h4>{props.employee.address}</p>
            <p><h4>City :</h4>{props.employee.city} State: {props.employee.state}</p>
            <p><h4>Notes :</h4>{props.employee.notes}</p>
            </div>
            {/* <Link to="/update-employee"><button>Edit Profile</button></Link> */}
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