import { useEffect} from 'react'
import {currentEmployeeSelector, getById} from "../../redux/currentEmployeeSlice"
import { useSelector, useDispatch } from "react-redux"
import {Link} from 'react-router-dom'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Container, Col, Row} from 'react-bootstrap'

// TODO: Media breakpoints for fonts, responsive header, last name resizing 
// FIXME: Edit classname acting strange, added addButton, Need to fix


export default function ProfilePage(props:any): JSX.Element {
    const dispatch = useDispatch()
    const {currentEmployee} = useSelector(currentEmployeeSelector)
    const {id} = props.match.params

       useEffect(() => {
        dispatch(getById(id))
      
    },[dispatch, id])


    

    return (
        
        <Container fluid className='profile-page'>
        
           
            <Row className="header-profile">
            
                <Col xs={8}>
                <h1>{currentEmployee.first_name}</h1>
                </Col>
                <Col xs={4}>
                <Link to="/"><FontAwesomeIcon icon={faHome} className="home-button" size="3x"/></Link>
                </Col> 
               
            </Row>
            
        
            <Row className="main-content">
                <Col xs={4} className="left-side">
                    <p><img src={`${currentEmployee.photo}`} alt={currentEmployee.first_name}/></p>
                    <h4>{currentEmployee.first_name} {currentEmployee.last_name}</h4>
    {/* FIXME: Buttons not right(naming) */}
                    <div><Link to="/update-employee"><button className="edit-button"><span></span><span></span><span></span><span></span>Edit Profile</button></Link></div>
                    
                </Col>

                <Col  xs={1} className="sideways-profile-name">
                    <h2>{currentEmployee.last_name}</h2>
                </Col>

                <Col xs={6} className="right-side">
                    <Container fluid className="information">
                        <Row><Col lg={true}><h4>Phone:</h4></Col><Col lg={true}><p>{currentEmployee.phone}</p></Col></Row>
                        <Row><Col lg={true}><h4>Email: </h4></Col><Col lg={true}><p>{currentEmployee.email}</p></Col></Row>
                        <Row><Col lg={true}><h4>Street Address: </h4></Col><Col lg={true}><p>{currentEmployee.address}</p></Col></Row>
                        <Row><Col lg={true}><h4>City :</h4></Col><Col lg={true}><p>{currentEmployee.city}</p></Col></Row> 
                        <Row><Col lg={true}><h4>State:</h4></Col><Col lg={true}><p>{currentEmployee.state}</p></Col></Row>
                        <Row><Col lg={true}><h4>Zip Code:</h4></Col><Col lg={true}><p>{currentEmployee.zip}</p></Col></Row>
                    </Container>
                        
                    <div className="notes"><h4>Notes</h4><br/><br/>{currentEmployee.notes}</div>
                </Col>

            </Row>
            
        </Container>
      
    )
}