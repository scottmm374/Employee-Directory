import React from 'react'
import {Link} from 'react-router-dom'
import rosie from '../assets/rosie.svg'

 const Header = () => {
     return(
         <div className='header'>
             <img src={rosie} alt="rosie"/>
             <h1>Team Directory</h1>
             <div><Link to='/add-employee'><button>Add New Employee</button></Link></div>
             
         </div>
     )
}

export default Header