import {useState} from 'react'
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
        <div lassName='form-container'>
        <div className='employee_form'>
        <h2>Update Employee</h2>
        <form onSubmit={handleSubmit}>
            <div className= "form-input">
            {/* <label>First Name</label> */}
           <input
           type='text'
           name='first_name'
           value={updateEmployee.first_name}
           required='First Name Required'
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           {/* <label>Last Name</label> */}
           <input
           type='text'
           name='last_name'
           value={updateEmployee.last_name}
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           {/* <label>Phone Number</label> */}
           <input
           type='text'
           name='phone'
           value={updateEmployee.phone}
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           {/* <label>Email</label> */}
           <input
           type='text'
           name='email'
           value={updateEmployee.email}
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           {/* <label>Address</label> */}
           <input
           type='text'
           name='address'
           value={updateEmployee.address}
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           {/* <label>City</label> */}
           <input
           type='text'
           name='city'
           value={updateEmployee.city}
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           {/* <label>State</label> */}
           <input
           type='text'
           name='state'
           value={updateEmployee.state}
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           {/* <label>Zip Code</label> */}
           <input
           type='text'
           name='zip'
           value={updateEmployee.zip}
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           {/* <label>Photo URL</label> */}
           <input
           type='text'
           name='photo'
           value={updateEmployee.photo}
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           {/* <label>Notes</label> */}
           <textarea
           type='text'
           name='notes'
           value={updateEmployee.notes}
           onChange={handleChange} />
           </div>
           
           <button>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           {/* <button> */}
               Update
               {/* </button> */}
           </button>
        </form>

    </div>
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