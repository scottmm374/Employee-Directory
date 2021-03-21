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
        <div className="form-container">
    <div className='employee_form'>
        <h2>Add New Employee</h2>
        <form onSubmit={handleSubmit}>
            <div className= "form-input">
            {/* <label>First Name</label> */}
           <input
           type='text'
           name='first_name'
           value={newEmployee.first_name}
           required='First Name Required'
           placeholder="First Name"
           
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           {/* <label>Last Name</label> */}
           <input
           type='text'
           name='last_name'
           value={newEmployee.last_name}
           required='First Name Required'
           placeholder="Last Name"
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           {/* <label>Phone Number</label> */}
           <input
           type='text'
           name='phone'
           value={newEmployee.phone}
           required='First Name Required'
           placeholder="Phone Number"
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           {/* <label>Email</label> */}
           <input
           type='text'
           name='email'
           value={newEmployee.email}
           required='First Name Required'
           placeholder="Email"
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           {/* <label>Address</label> */}
           <input
           type='text'
           name='address'
           value={newEmployee.address}
           required='First Name Required'
           placeholder="Address"
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           {/* <label>City</label> */}
           <input
           type='text'
           name='city'
           value={newEmployee.city}
           required='First Name Required'
           placeholder="City"
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           {/* <label>State</label> */}
           <input
           type='text'
           name='state'
           value={newEmployee.state}
           required='First Name Required'
           placeholder="State"
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           {/* <label>Zip Code</label> */}
           <input
           type='text'
           name='zip'
           value={newEmployee.zip}
           required='First Name Required'
           placeholder="Zip Code"
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           {/* <label>Photo URL</label> */}
           <input
           type='text'
           name='photo'
           value={newEmployee.photo}
           placeholder="link tp profile photo"
           
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           {/* <label>Notes</label> */}
           <textarea
           type='text'
           name='notes'
           value={newEmployee.notes}
           placeholder="Notes"
           onChange={handleChange} />
           </div>
           
           <button>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           {/* <button> */}
               Add Employee
               {/* </button> */}
           </button>
        </form>

    </div>
    </div>
    )
}

function mapStateToProps(state) {
    return {
        error: state.error     
    }
}

export default connect(mapStateToProps, {addEmployee})(AddEmployee);
