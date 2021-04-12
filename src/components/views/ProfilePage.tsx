import { useEffect} from 'react'
import {currentEmployeeSelector, getById} from "../../redux/currentEmployeeSlice"
import { useSelector, useDispatch } from "react-redux"
import {Link} from 'react-router-dom'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Container, Col, Row} from 'react-bootstrap'
import { reduceEachLeadingCommentRange } from 'typescript';

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
                <Col xs={true}>
                <Link to="/"><FontAwesomeIcon icon={faHome} className="home-button" size="3x"/></Link>
                </Col> 
               
            </Row>
            
        
            <Row className="main-content" >
                <Col xs={5} className="left-side">
                    <Container fluid >
                    <Row><p><img src={`${currentEmployee.photo}`} alt={currentEmployee.first_name}/></p></Row>
                    <Row><Col xs={6}><h4 className="first-name">{currentEmployee.first_name}</h4></Col><Col xs={6}><h4 className="last-name">{currentEmployee.last_name}</h4></Col></Row>
                    <Row><Col><Link to="/update-employee"><button className="edit-button"><span></span><span></span><span></span><span></span>Edit Profile</button></Link></Col></Row>
                    </Container>
                </Col>

                <Col  xs={true} className="sideways-profile-name">
                    <h2>{currentEmployee.last_name}</h2>
                </Col>

                <Col xs={5} className="right-side">
                    <Container fluid className="information">
                        <Row><Col xs={6}><h4>Phone:</h4></Col><Col xs={true}><p>{currentEmployee.phone}</p></Col></Row>
                        <Row><Col xs={6}><h4>Email: </h4></Col><Col xs={true}><p>{currentEmployee.email}</p></Col></Row>
                        <Row><Col xs={6}><h4>Street Address: </h4></Col><Col xs={true}><p>{currentEmployee.address}</p></Col></Row>
                        <Row><Col xs={6}><h4>City :</h4></Col><Col xs={true}><p>{currentEmployee.city}</p></Col></Row> 
                        <Row><Col xs={6}><h4>State:</h4></Col><Col xs={true}><p>{currentEmployee.state}</p></Col></Row>
                        <Row><Col xs={6}><h4>Zip Code:</h4></Col><Col xs={true}><p>{currentEmployee.zip}</p></Col></Row>
                    </Container>
                        
                    <Row><div className="notes"><h4>Notes</h4><br/><br/>{currentEmployee.notes}</div></Row>
                </Col>

            </Row>
            
        </Container>
      
    )
}