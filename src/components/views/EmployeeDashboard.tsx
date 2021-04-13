import EmployeeCard from './EmployeeCard'
import Header from '../../ui_elements/Header'
import {Container, Col} from 'react-bootstrap'


const  EmployeeDashboard = () =>{
    return (
        <>
        <Header />
        <Container fluid className='dashboard'>
            <Col  xs={1} className="sideways-title"><h2>Rivet</h2></Col>
                <Col xs={true}>
                <EmployeeCard/>
                </Col>
            </Container>
        </>
    )
}
export default EmployeeDashboard