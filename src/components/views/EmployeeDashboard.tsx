import EmployeeCard from './EmployeeCard'
import Header from '../../ui_elements/Header'
import {Container, CardColumns, Col} from 'react-bootstrap'


const  EmployeeDashboard = () =>{
    return (
        <>
        <div>
        <Header />
        </div>

       
        <Container className='dashboard'>
            <Col   className="sideways-title"><h2>Rivet</h2></Col>
           
                <div >
                    
                <EmployeeCard/>

                </div>
               

               


            </Container>
            
            {/* </Col> */}
            {/* </div> */}
       
       
        </>
    )
}
export default EmployeeDashboard