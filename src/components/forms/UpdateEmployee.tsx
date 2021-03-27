import {useState} from 'react'
import {update, getEmpById} from '../../redux/actions'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




function UpdateEmployee(props: any){
    console.log(props, "props in update")
    const [updateEmployee, setUpdateEmployee] = useState(props.currentEmployee)
    const history = useHistory()
   

    const handleChange = (event: any) => {
        event.preventDefault()
        setUpdateEmployee({...updateEmployee, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        props.update(props.currentEmployee.id, updateEmployee)
        history.push('/employee/updateEmployee.id')
    }
    

    return (
        <div className='form-container'>
        <div className='employee_form'>
        <div className="form-header">
        <h2>Update Employee</h2>
            <div><Link to="/employee/updateEmployee.id"><FontAwesomeIcon icon={faTimesCircle} className="close-button" size="3x"></FontAwesomeIcon></Link></div>
            
            
            </div>
        <form onSubmit={handleSubmit}>
            <div className= "form-input">
           <input
           type='text'
           name='first_name'
           value={updateEmployee.first_name}
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           <input
           type='text'
           name='last_name'
           value={updateEmployee.last_name}
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           <input
           type='text'
           name='phone'
           value={updateEmployee.phone}
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           <input
           type='text'
           name='email'
           value={updateEmployee.email}
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           <input
           type='text'
           name='address'
           value={updateEmployee.address}
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           <input
           type='text'
           name='city'
           value={updateEmployee.city}
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           <input
           type='text'
           name='state'
           value={updateEmployee.state}
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           <input
           type='text'
           name='zip'
           value={updateEmployee.zip}
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           <input
           type='text'
           name='photo'
           value={updateEmployee.photo}
           onChange={handleChange} />
           </div>
           {/* <div className= "form-input">
           <textarea
           type='text'
           name='notes'
           value={updateEmployee.notes}
           onChange={handleChange} />
           </div> */}
           
           <button>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
               Update
           </button>
        </form>

    </div>
    </div>
    )

}

function mapStateToProps(state: any) {
    return {
        error: state.error,
        currentEmployee: state.currentEmployee   
    }
}

export default connect(mapStateToProps, {update, getEmpById})(UpdateEmployee);