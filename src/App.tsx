import * as React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import EmployeeDashboard from './components/views/EmployeeDashboard'
import AddEmployee from './components/forms/AddEmployee'
import UpdateEmployee from './components/forms/UpdateEmployee'
import ProfilePage from './components/views/ProfilePage';

function App(): JSX.Element {
  return (
    <div className="App">
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
