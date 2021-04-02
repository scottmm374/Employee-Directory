import {useState, useEffect} from 'react'
import { update, getById, currentEmployeeSelector} from '../../redux/currentEmployeeSlice'
import {useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
// import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { current } from 'immer';


interface Inputs {
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
    const {id} = props.match.params
    const {currentEmployee} = useSelector(currentEmployeeSelector)
    console.log(props, "PROPS")
    const dispatch = useDispatch()
    const {register, handleSubmit, errors} = useForm<Inputs>()
    const [updateEmployee, setUpdateEmployee] = useState(
        {first_name: currentEmployee.first_name,
             last_name: currentEmployee.last_name,
              phone: currentEmployee.phone,
               email: currentEmployee.email,
                address: currentEmployee.address,
                city: currentEmployee.city,
                state: currentEmployee.state,
                zip: currentEmployee.zip,
                photo: currentEmployee.photo,
                notes: currentEmployee.notes
            })
    
    const history = useHistory()

    useEffect(() => {
        dispatch(getById(id))
      
    },[id])
   

    const handleChange = (event: any) => {
        event.preventDefault()
        setUpdateEmployee({...updateEmployee, [event.target.name]: event.target.value})
    }

    const onSubmit = (data: Inputs) => {
        dispatch(update(id, updateEmployee))
        history.push('/employee/updateEmployee.id')
    }
    

    return (
        <div className='form-container'>
        <div className='employee-form'>
        <div className="form-header">
        <h2>Update Employee</h2>
            <div><Link to="/employee/updateEmployee.id"><FontAwesomeIcon icon={faTimesCircle} className="close-button" size="3x"/></Link></div>
            
            
            </div>
        <form onSubmit={handleSubmit(onSubmit)}>

        <div className= "form-input">
           <input
           ref={register({required: true})} 
           type='text'
           name='first_name'
           value={updateEmployee.first_name}
           onChange={handleChange} />
           {errors.first_name && errors.first_name.type === "required" && (<div className="error">You must enter your First name.</div>)}
           </div>

           <div className= "form-input">
           <input
           ref={register({required: true})} 
           type='text'
           name='last_name'
           value={updateEmployee.last_name}
           onChange={handleChange} />
           {errors.last_name && errors.last_name.type === "required" && (<div className="error">You must enter your Last name.</div>)}
           </div>

           <div className= "form-input">
           <input
           ref={register({required: true})} 
           type='text'
           name='phone'
           value={updateEmployee.phone}
           onChange={handleChange} />
           {errors.phone && errors.phone.type === "required" && (<div className="error">You must enter Phone number.</div>)}
           </div>

           <div className= "form-input">
           <input
           ref={register({required: true})} 
           type='text'
           name='email'
           value={updateEmployee.email}
           onChange={handleChange} />
           {errors.email && errors.email.type === "required" && (<div className="error">You must enter your Email.</div>)}
         
           </div>

           <div className= "form-input">
           <input
           ref={register({required: true})} 
           type='text'
           name='address'
           value={updateEmployee.address}
           onChange={handleChange} />
           {errors.address && errors.address.type === "required" && (<div className="error">You must enter your Street Address.</div>)}
           </div>

           <div className= "form-input">
           <input
           ref={register({required: true})} 
           type='text'
           name='city'
           value={updateEmployee.city}
           onChange={handleChange} />
           {errors.city && errors.city.type === "required" && (<div className="error">You must enter your City.</div>)}
           </div>

           <div className= "form-input">
           <input
           ref={register({required: true})} 
           type='text'
           name='state'
           value={updateEmployee.state}
           onChange={handleChange} />
           {errors.state && errors.state.type === "required" && (<div className="error">You must enter your State.</div>)}
           </div>

           <div className= "form-input">
           <input
           ref={register({required: true})} 
           type='text'
           name='zip'
           value={updateEmployee.zip}
           onChange={handleChange} />
           {errors.zip && errors.zip.type === "required" && (<div className="error">You must enter your Zip Code.</div>)}
           </div>

           <div className= "form-input">
           <input
           ref={register}
           type='text'
           name='photo'
           value={updateEmployee.photo}
           onChange={handleChange} />
           </div>

           <div className= "form-input text-area">
           <textarea
           ref={register}
           name='notes'
           value={updateEmployee.notes}
           onChange={handleChange} />
           </div> 
           
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

// function mapStateToProps(state: any) {
//     return {
//         error: state.error,
//         currentEmployee: state.currentEmployee   
//     }
// }

// export default connect(mapStateToProps, {update})(UpdateEmployee);