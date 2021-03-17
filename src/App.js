import React from 'react';
import './App.css';
import EmployeeList from './components/views/EmployeeList'
import Employee from './components/views/ProfilePage'
import AddEmployee from './components/forms/AddEmployee'

function App() {
  return (
    <div className="App">
      <EmployeeList />
      <Employee />
      <AddEmployee />
    </div>
  );
}

export default App;
