import EmployeeCard from './EmployeeCard'
import Header from '../../ui_elements/Header'


const  EmployeeDashboard = () =>{
    return (
        <>
         <Header />
         <div className='dashboard'>
         <div className="sideways-title"><h2>Rivet</h2></div>
        <EmployeeCard />
        </div>
        </>
    )
}
export default EmployeeDashboard