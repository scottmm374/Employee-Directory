import React from 'react';
import './App.css';
// import {Route, Switch} from 'react-router-dom'
import EmployeeList from './components/views/EmployeeList'
import AddEmployee from './components/forms/AddEmployee'
import ProfilePage from './components/views/ProfilePage';

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route exact path='/' component={EmployeeList} />
        <Route path='/employee/:id' component={ProfilePage} />
        <Route path='/add-employee-form' component={AddEmployee} />
      </Switch> */}


       {/* <EmployeeList /> */}
      <ProfilePage />
       {/* <AddEmployee /> */}
    </div>
  );
}

export default App;
