import React, { useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getEmpById} from '../../redux/actions'

const ProfilePage = (props) => {
    
    useEffect(() => {
        props.getEmpById(props.params.id)
       
    }, [props])
    

    return (
        <div>

        </div>
    )
}

function mapStateToProps(state) {
    console.log("State", state)
    return {
        employees: state.employees
            
    }
}

export default connect(mapStateToProps, {getEmpById})(ProfilePage);