import {Link} from 'react-router-dom'
import rosie from '../assets/rosie.svg'

 const Header = () => {
     return(
         <div className='header'>
              <img src={rosie} alt="rosie"/>
             
             <h1 className="main-title">Team Directory</h1>
             <div className="add-employee-container"><Link to='/add-employee'><button className="add-employee-button"><span></span><span></span><span></span><span></span>Add New Employee</button></Link></div>
             
             
         </div>
     )
}

export default Header