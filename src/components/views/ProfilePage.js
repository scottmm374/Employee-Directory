import React, { useEffect} from 'react'
// import axios from 'axios'
import {useParams, useRouteMatch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {getEmpById} from '../../redux/actions'
import UpdateEmployee from '../forms/UpdateEmployee'

const ProfilePage = (props) => {
    const {id} = props.match.params
    // const params = useParams()
    // console.log("profile page", props, params)
    
    // const currEmployee = props.find(emp => emp.id === Number(params));
    // console.log(currEmployee)

    useEffect(() => {
        props.getEmpById(id)
      
    },[])
    
    
    return (
        <div>
        <div>
            <h1>{props.employee.first_name} {props.employee.last_name}</h1>
            <p>Phone :{props.employee.phone}</p>
            <p>Email: {props.employee.email}</p>
            <p>Street:{props.employee.address}</p>
            <p>City:{props.employee.city} State: {props.employee.state}</p>
            <p>Notes: {props.employee.notes}</p>
            <button>Edit Profile</button>
        </div>
        {/* <UpdateEmployee  /> */}
        </div>
    )

}

function mapStateToProps(state) {
    console.log("State", state)
    return {
        employee: state.currentEmployee
            
    }
}
// export default ProfilePage;
export default connect(mapStateToProps, {getEmpById})(ProfilePage);