import React from 'react';
import './App.css';
import EmployeeList from './components/views/EmployeeList'
import Employee from './components/views/Employee'

function App() {
  return (
    <div className="App">
      <EmployeeList />
      <Employee />
    </div>
  );
}

export default App;
