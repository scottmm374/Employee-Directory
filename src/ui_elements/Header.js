import {Link} from 'react-router-dom'
import rosie from '../assets/rosie.svg'
import { Container, Row, Col } from 'react-bootstrap'

 const Header = () => {
     return(
         <Container fluid className='header'>
             <Row>
                 <Col >
                 <img src={rosie} alt="rosie"/>
                 </Col>
                <Col xs={6}>
                <h1 className="main-title">Team Directory</h1>
                </Col>
                <Col >
                <div className="add-employee-container"><Link to='/add-employee'><button className="add-employee-button"><span></span><span></span><span></span><span></span>Add New Employee</button></Link></div>
                </Col>
             </Row>
             
             
             
         </Container>
     )
}

export default Header