import {useState} from 'react'
import {addEmployee} from '../../redux/actions'
import {connect} from 'react-redux'


function AddEmployee(props){
    const [newEmployee, setNewEmployee] = useState({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        photo: "",
        notes: ""

    })

    const handleChange = event => {
        event.preventDefault()
        setNewEmployee({...newEmployee, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addEmployee(newEmployee)
        
        setNewEmployee({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        photo: "",
        notes: ""})
    }
    

    return (
    <div className='add_employee_form'>
        <form onSubmit={handleSubmit}>
            <label>First Name</label>
           <input
           type='text'
           name='first_name'
           value={newEmployee.first_name}
           
           onChange={handleChange} />
           <label>Last Name</label>
           <input
           type='text'
           name='last_name'
           value={newEmployee.last_name}
           onChange={handleChange} />
           <label>Phone Number</label>
           <input
           type='text'
           name='phone'
           value={newEmployee.phone}
           onChange={handleChange} />
           <label>Email</label>
           <input
           type='text'
           name='email'
           value={newEmployee.email}
           onChange={handleChange} />
           <label>Address</label>
           <input
           type='text'
           name='address'
           value={newEmployee.address}
           onChange={handleChange} />
           <label>City</label>
           <input
           type='text'
           name='city'
           value={newEmployee.city}
           onChange={handleChange} />
           <label>State</label>
           <input
           type='text'
           name='state'
           value={newEmployee.state}
           onChange={handleChange} />
           <label>Zip Code</label>
           <input
           type='text'
           name='zip'
           value={newEmployee.zip}
           onChange={handleChange} />
           <label>Photo URL</label>
           <input
           type='text'
           name='photo'
           value={newEmployee.photo}
           onChange={handleChange} />
           <label>Notes</label>
           <textarea
           type='text'
           name='notes'
           value={newEmployee.notes}
           onChange={handleChange} />
           <button>Add Employee</button>
        </form>

    </div>
    )
}

function mapStateToProps(state) {
    return {
        error: state.error     
    }
}

export default connect(mapStateToProps, {addEmployee})(AddEmployee);
