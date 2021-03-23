import {useState} from 'react'
import {addEmployee} from '../../redux/actions'
import {connect} from 'react-redux'


function AddEmployee(props: any){
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

    const handleChange = (event:any) => {
        event.preventDefault()
        setNewEmployee({...newEmployee, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        props.addEmployee(newEmployee)
        props.history.push('/')
        
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
           <input
           type='text'
           name='first_name'
           value={newEmployee.first_name}
           required
           placeholder="First Name"
           
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           <input
           type='text'
           name='last_name'
           value={newEmployee.last_name}
           required
           placeholder="Last Name"
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           <input
           type='text'
           name='phone'
           value={newEmployee.phone}
           required
           placeholder="Phone Number"
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           <input
           type='text'
           name='email'
           value={newEmployee.email}
           required
           placeholder="Email"
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           <input
           type='text'
           name='address'
           value={newEmployee.address}
           required
           placeholder="Address"
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           <input
           type='text'
           name='city'
           value={newEmployee.city}
           required
           placeholder="City"
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           <input
           type='text'
           name='state'
           value={newEmployee.state}
           required
           placeholder="State"
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           <input
           type='text'
           name='zip'
           value={newEmployee.zip}
           required
           placeholder="Zip Code"
           onChange={handleChange} />
           </div>
           <div className= "form-input">
           <input
           type='text'
           name='photo'
           value={newEmployee.photo}
           placeholder="link tp profile photo"
           
           onChange={handleChange} />
           </div>
           {/* <div className= "form-input">
           <textarea
           type='text'
           name='notes'
           value={newEmployee.notes}
           placeholder="Notes"
           onChange={handleChange} />
           </div> */}
           
           <button>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
               Add Employee
           </button>
        </form>

    </div>
    </div>
    )
}

function mapStateToProps(state: any) {
    return {
        error: state.error     
    }
}

export default connect(mapStateToProps, {addEmployee})(AddEmployee);
