import React from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom'
import EmployeeDashboard from './components/views/EmployeeCard'
import AddEmployee from './components/forms/AddEmployee'
import UpdateEmployee from './components/forms/UpdateEmployee'
import ProfilePage from './components/views/ProfilePage';
import Header from './ui_elements/Header'

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
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
