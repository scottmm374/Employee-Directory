// import  {useState} from 'react'
// import {Modal} from 'react-bootstrap'
// import AddEmployee from '../components/forms/AddEmployee'
// import {Link} from 'react-router-dom'
// import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// function FormModal() {
//     const [show, setShow] = useState(false);

//     const toggleOpen = () =>  setShow(true)

//     const closeButton = <FontAwesomeIcon icon={faTimesCircle} className="close-button" size="3x"/>


    
  
//     return (
//       <>
        
           
//                  {/* <button className="add-employee-button" onClick={() => setShow(true)}>
//                  <span></span><span></span><span></span><span></span>
//                  Add New Employee
//                  </button> */}
                 
             
               
                
//                     {/* <div><Link to="/"><FontAwesomeIcon icon={faTimesCircle} className="close-button" size="3x"/></Link></div> */}
               



//         <Modal
//         className="add-employee-container"
//           show={show}
//           onHide={() => setShow(false)}
//         //  
          
//         >
//           <Modal.Header className="form-header" > 
//           {closeButton}
          
//             <Modal.Title >
//             <h2>Add New Employee</h2>
//             </Modal.Title> 
//            </Modal.Header> 
//           <Modal.Body>
//             <p>
//                 <AddEmployee />
              
//             </p>
//           </Modal.Body>
//           <Modal.Footer><button>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                         Add Employee
//                     </button></Modal.Footer>
//         </Modal>
//       </>
//     );
//   }
  
//   export default FormModal