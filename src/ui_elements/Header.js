import {Link} from 'react-router-dom'
import rosie from '../assets/rosie.svg'
import { Jumbotron, Row, Col } from 'react-bootstrap'

 const Header = () => {
     return(
         <Jumbotron fluid className='header'>
             <Row>
                 <Col >
                 <img src={rosie} alt="rosie"/>
                 </Col>
                <Col >
                <h1 className="main-title">Team Directory</h1>
                </Col>
                <Col >
                <div className="add-employee-container"><Link to='/add-employee'><button className="add-employee-button"><span></span><span></span><span></span><span></span>Add New Employee</button></Link></div>
                </Col>
             </Row>
             
             
             
         </Jumbotron>
     )
}

export default Header