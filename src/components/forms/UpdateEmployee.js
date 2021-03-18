import React, {useState, useEffect} from 'react'
import {update, getEmpById} from '../../redux/actions'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'




function UpdateEmployee(props){
    console.log(props, "props in update")
    const [updateEmployee, setUpdateEmployee] = useState(props.currentEmployee)
    const history = useHistory()
   

    const handleChange = event => {
        event.preventDefault()
        setUpdateEmployee({...updateEmployee, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.update(props.currentEmployee.id, updateEmployee)
        history.push('/employee/updateEmployee.id')
    }
    

    return (
    <div className='add_employee_form'>
        <form onSubmit={handleSubmit}>
            <label>First Name</label>
           <input
           type='text'
           name='first_name'
           value={updateEmployee.first_name}
           
           onChange={handleChange} />
           <label>Last Name</label>
           <input
           type='text'
           name='last_name'
           value={updateEmployee.last_name}
           onChange={handleChange} />
           <label>Phone Number</label>
           <input
           type='text'
           name='phone'
           value={updateEmployee.phone}
           onChange={handleChange} />
           <label>Email</label>
           <input
           type='text'
           name='email'
           value={updateEmployee.email}
           onChange={handleChange} />
           <label>Address</label>
           <input
           type='text'
           name='address'
           value={updateEmployee.address}
           onChange={handleChange} />
           <label>City</label>
           <input
           type='text'
           name='city'
           value={updateEmployee.city}
           onChange={handleChange} />
           <label>State</label>
           <input
           type='text'
           name='state'
           value={updateEmployee.state}
           onChange={handleChange} />
           <label>Zip Code</label>
           <input
           type='text'
           name='zip'
           value={updateEmployee.zip}
           onChange={handleChange} />
           <label>Photo URL</label>
           <input
           type='text'
           name='photo'
           value={updateEmployee.photo}
           onChange={handleChange} />
           <label>Notes</label>
           <textarea
           type='text'
           name='notes'
           value={updateEmployee.notes}
           onChange={handleChange} />
           <button>Update</button>
        </form>

    </div>
    )
}

function mapStateToProps(state) {
    return {
        error: state.error,
        currentEmployee: state.currentEmployee   
    }
}

export default connect(mapStateToProps, {update, getEmpById})(UpdateEmployee);
// export default AddEmployee