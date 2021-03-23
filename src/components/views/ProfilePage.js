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
            <img src={`${props.employee.photo}`} alt={props.employee.first_name}/>
            <h1>{props.employee.first_name} {props.employee.last_name}</h1>
            </div>
            < div className="right-side">
            <p>Phone :{props.employee.phone}</p>
            <p>Email: {props.employee.email}</p>
            <p>Street:{props.employee.address}</p>
            <p>City:{props.employee.city} State: {props.employee.state}</p>
            <p>Notes: {props.employee.notes}</p>
            </div>
            <Link to="/update-employee"><button>Edit Profile</button></Link>
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