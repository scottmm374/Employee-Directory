import {Link} from 'react-router-dom'
import rosie from '../assets/rosie.svg'

 const Header = () => {
     return(
         <div className='header'>
             <h1>Team Directory</h1>
             
             
             <div><Link to='/add-employee'><button className="add-employee-button"><span></span><span></span><span></span><span></span>Add New Employee</button></Link></div>
             <img src={rosie} alt="rosie"/>
             
         </div>
     )
}

export default Header