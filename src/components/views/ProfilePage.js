import React, { useEffect} from 'react'
// import axios from 'axios'
// import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import {getEmpById} from '../../redux/actions'
import UpdateEmployee from '../forms/UpdateEmployee'

const ProfilePage = (props) => {
    // const params = useParams()
    
    useEffect(() => {
        props.getEmpById()
       
    }, [])
    

    return (
        <div>
        <div>
            <h1>{props.employee.first_name} {props.employee.last_name}</h1>
            <p>Phone :{props.employee.phone}</p>
            <p>Email: {props.employee.email}</p>
            <p>Street:{props.employee.address}</p>
            <p>City:{props.employee.city} State: {props.employee.state}</p>
            <p>Notes: {props.employee.notes}</p>

        </div>
        <UpdateEmployee props={props} id={props.employee.id} />
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