import {useState} from 'react'
import { update, currentEmployeeSelector} from '../../redux/currentEmployeeSlice'
import {useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Col, Row} from 'react-bootstrap'


interface Inputs {
    id:number | string,
    first_name: string,
        last_name: string,
        phone: string,
        email: string,
        address: string,
        city: string,
        state: string,
        zip: string,
        photo?: string | null | undefined,
        notes?: string | null | undefined,
}


export default function UpdateEmployee(props: any): JSX.Element{

    const {currentEmployee} = useSelector(currentEmployeeSelector)
    const dispatch = useDispatch()
    const {register, handleSubmit, errors} = useForm<Inputs>()
    const [updateEmployee, setUpdateEmployee] = useState(currentEmployee)
        

    console.log("Update Employee", updateEmployee);
    
    const history = useHistory()

    
   

    const handleChange = (event: any) => {
        // event.preventDefault()
        setUpdateEmployee({...updateEmployee, [event.target.name]: event.target.value})
    }

    const onSubmit = (data: Inputs) => {
        dispatch(update(currentEmployee.id, updateEmployee))
        history.push(`/employee/${currentEmployee.id}`)
    }
    

    return (
        <div className="form-container">
            <div className='employee-form'>
                <div className="form-header">
                    <h2>Update Employee</h2>
            <div><Link to={`/employee/${currentEmployee.id}`}><FontAwesomeIcon icon={faTimesCircle} className="close-button" size="3x"/></Link></div>
            
            
            </div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <Row className="basic-info">
                        <Col className= "form-input error">
                        <label>First Name</label>
                        <input
                        className= "form-input error"
                        ref={register({required: true})} 
                        type='text'
                        name='first_name'
                        value={updateEmployee.first_name}
                        onChange={handleChange} />
                        {errors.first_name && errors.first_name.type === "required" && (<div className="error">You must enter your First name.</div>)}
                        </Col>

                    <Col className= "form-input error">
                    <label>Last Name</label>
                        <input 
                        ref={register({required: true})} 
                        type='text'
                        name='last_name'
                        value={updateEmployee.last_name}
                        onChange={handleChange} />
                        {errors.last_name && errors.last_name.type === "required" && (<div className="error">You must enter your Last name.</div>)}
                    </Col>
                  
                    <Col className= "form-input error">
                        <label>Phone Number</label>
                        <input
                        ref={register({required: true})} 
                        type='text'
                        name='phone'
                        value={updateEmployee.phone}
                        // placeholder="Phone Number"
                        onChange={handleChange} />
                        {errors.phone && errors.phone.type === "required" && (<div className="error">You must enter Phone number.</div>)}
                    </Col>

                    <Col className= "form-input error">
                        <label>Email</label>
                        <input
                        ref={register({required: true})}
                        type='text'
                        name='email'
                        value={updateEmployee.email}
                        // placeholder="Email"
                        onChange={handleChange} />
                        {errors.email && errors.email.type === "required" && (<div className="error">You must enter your Email.</div>)}
                    </Col>
                    </Row>

                    <Row className="address">
                    <Col className= "form-input error">
                        <label>Street Address</label>
                        <input
                        ref={register({required: true})}
                        type='text'
                        name='address'
                        value={updateEmployee.address}
                        // placeholder="Address"
                        onChange={handleChange} />
                        {errors.address && errors.address.type === "required" && (<div className="error">You must enter your Street Address.</div>)}
                    </Col>
                   

                   
                    
                    <Col className= "form-input error">
                    <label>City</label>
                        <input
                        ref={register({required: true})}
                        type='text'
                        name='city'
                        value={updateEmployee.city}
                        // placeholder="City"
                        onChange={handleChange} />
                        {errors.city && errors.city.type === "required" && (<div className="error">You must enter your City.</div>)}
                    </Col>

                    <Col className= "form-input error">
                    <label>State</label>
                        <input
                        ref={register({required: true})}
                        type='text'
                        name='state'
                        value={updateEmployee.state}
                        // placeholder="State"
                        onChange={handleChange} />
                        {errors.state && errors.state.type === "required" && (<div className="error">You must enter your State.</div>)}
                    </Col>

                    <Col className= "form-input error">
                        <label>Zip Code</label>
                        <input
                        ref={register({required: true})}
                        type='text'
                        name='zip'
                        value={updateEmployee.zip}
                        // placeholder="Zip Code"
                        onChange={handleChange} />
                        {errors.zip && errors.zip.type === "required" && (<div className="error">You must enter your Zip Code.</div>)}
                    </Col>
                   </Row>
                   <Row className="optional-info">
                    <Col className= "form-input error">
                    <label>Link to Profile Picture</label>
                        <input
                        ref={register}
                        type='text'
                        name='photo'
                        value={updateEmployee.photo}
                        onChange={handleChange} />
                    </Col>
                    </Row>
                    <Row>
                    <Col  className= "form-input text-area error">
                        <textarea
                        ref={register}
                        name='notes'
                        value={updateEmployee.notes}
                        placeholder="Notes"
                        onChange={handleChange} />
                    </Col> 
                    </Row>
                    
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


