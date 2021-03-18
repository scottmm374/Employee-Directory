import React from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom'
import EmployeeDashboard from './components/views/EmployeeCard'
import AddEmployee from './components/forms/AddEmployee'
import UpdateEmployee from './components/forms/UpdateEmployee'
import ProfilePage from './components/views/ProfilePage';

function App() {
  return (
    <div className="App">
      <div><Link to='/add-employee'><button>Add New Employee</button></Link></div>
      <Switch>
    <Route exact path='/' component={EmployeeDashboard}/ >
    <Route path='/employee/:id' component={ProfilePage}/ >
    <Route path='/add-employee' component={AddEmployee}/ >
    <Route path='/update-employee' component={UpdateEmployee}/ >
   
      
    </Switch> 
       
    </div>
  );
}

export default App;
