import {useState} from 'react'
// import {addEmployee} from '../../redux/actions'
// import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from 'react-redux';
import {addNewEmployee} from '../../redux/employeesSlice'

interface Inputs {
    first_name: string,
        last_name: string,
        phone: string,
        email: string,
        address: string,
        city: string,
        state: string,
        zip: string,
        photo: string,
        notes: string,
}


export default function AddEmployee(props: any): JSX.Element{
    const dispatch = useDispatch()
    const {register, handleSubmit, errors} = useForm<Inputs>()
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

    const onSubmit = (data: Inputs) => {
        dispatch(addNewEmployee(newEmployee))
        props.history.push('/')
        
    }
    

    return (
        <div className="form-container">
            <div className='employee-form'>
                <div className="form-header">
                    <h2>Add New Employee</h2>
                    <div><Link to="/"><FontAwesomeIcon icon={faTimesCircle} className="close-button" size="3x"/></Link></div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className= "form-input">
                        <input
                        ref={register({required: true})} 
                        type='text'
                        name='first_name'
                        value={newEmployee.first_name}
                        placeholder="First Name"
                        onChange={handleChange} />
                        {errors.first_name && errors.first_name.type === "required" && (<div className="error">You must enter your First name.</div>)}
                    </div>

                    <div className= "form-input">
                        <input
                        ref={register({required: true})} 
                        type='text'
                        name='last_name'
                        value={newEmployee.last_name}
                        placeholder="Last Name"
                        onChange={handleChange} />
                        {errors.last_name && errors.last_name.type === "required" && (<div className="error">You must enter your Last name.</div>)}
                    </div>

                    <div className= "form-input">
                        <input
                        ref={register({required: true})} 
                        type='text'
                        name='phone'
                        value={newEmployee.phone}
                        placeholder="Phone Number"
                        onChange={handleChange} />
                        {errors.phone && errors.phone.type === "required" && (<div className="error">You must enter Phone number.</div>)}
                    </div>

                    <div className= "form-input">
                        <input
                        ref={register({required: true})}
                        type='text'
                        name='email'
                        value={newEmployee.email}
                        placeholder="Email"
                        onChange={handleChange} />
                        {errors.email && errors.email.type === "required" && (<div className="error">You must enter your Email.</div>)}
                    </div>

                    <div className= "form-input">
                        <input
                        ref={register({required: true})}
                        type='text'
                        name='address'
                        value={newEmployee.address}
                        placeholder="Address"
                        onChange={handleChange} />
                        {errors.address && errors.address.type === "required" && (<div className="error">You must enter your Street Address.</div>)}
                    </div>

                    <div className= "form-input">
                        <input
                        ref={register({required: true})}
                        type='text'
                        name='city'
                        value={newEmployee.city}
                        placeholder="City"
                        onChange={handleChange} />
                        {errors.city && errors.city.type === "required" && (<div className="error">You must enter your City.</div>)}
                    </div>

                    <div className= "form-input">
                        <input
                        ref={register({required: true})}
                        type='text'
                        name='state'
                        value={newEmployee.state}
                        placeholder="State"
                        onChange={handleChange} />
                        {errors.state && errors.state.type === "required" && (<div className="error">You must enter your State.</div>)}
                    </div>

                    <div className= "form-input">
                        <input
                        ref={register({required: true})}
                        type='text'
                        name='zip'
                        value={newEmployee.zip}
                        placeholder="Zip Code"
                        onChange={handleChange} />
                        {errors.zip && errors.zip.type === "required" && (<div className="error">You must enter your Zip Code.</div>)}
                    </div>

                    <div className= "form-input">
                        <input
                        ref={register}
                        type='text'
                        name='photo'
                        value={newEmployee.photo}
                        placeholder="Link to profile photo"
                        onChange={handleChange} />
                    </div>

                    <div className= "form-input text-area">
                        <textarea
                        ref={register}
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
                        Add Employee
                    </button>
                </form>

        </div>
    </div>
    )
}
