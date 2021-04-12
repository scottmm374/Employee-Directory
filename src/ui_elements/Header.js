import {Link} from 'react-router-dom'
import rosie from '../assets/rosie.svg'
import { Container, Row, Col } from 'react-bootstrap'
// import FormModal from './FormModal.tsx'

 const Header = () => {
     return(
         <Container fluid className='header'>
             <Row>
                 <Col xs={12}  sm={3} >
                 <img src={rosie} alt="rosie"/>
                 </Col>
                <Col xs={12}  sm={6}>
                <h1 className="main-title">Team Directory</h1>
                </Col>
                <Col xs={12} sm={3}>
               
                <div className="add-employee-container"><Link to='/add-employee'><button className="add-employee"><span></span><span></span><span></span><span></span>Add Employee</button></Link></div>
                </Col>
             </Row>
             
             
             
         </Container>
     )
}

export default Header