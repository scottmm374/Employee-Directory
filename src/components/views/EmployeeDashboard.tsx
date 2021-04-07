import EmployeeCard from './EmployeeCard'
import Header from '../../ui_elements/Header'
import {Container, CardColumns, Col} from 'react-bootstrap'


const  EmployeeDashboard = () =>{
    return (
        <>
        {/* <div> */}
        <Header />
        {/* </div> */}

       
        <Container fluid className='dashboard'>
            <Col  xs={1} className="sideways-title"><h2>Rivet</h2></Col>
           
                <Col>
                    
                <EmployeeCard/>

                </Col>
               

               


            </Container>
            
            {/* </Col> */}
            {/* </div> */}
       
       
        </>
    )
}
export default EmployeeDashboard