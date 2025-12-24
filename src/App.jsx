import React from "react";
import EmployeeTable from "./components/EmployeeTable";
import './App.css';

function App() {
  // Employee data
  const employees = [
    { name: "Santhosh", city: "Hyderabad", department: "IT", car: "Scorpio-N" },
    { name: "Rohit", city: "Bangalore", department: "CSE", car: "Swift" },
    { name: "Suresh", city: "Cuttak", department: "Biotechnology", car: "Tata Alto" },
    { name: "Mohan", city: "Palasa", department: "AI", car: "Tata Safari" } // added
  ];

  return (
    <div className="app-container">
      <h1 className="main-heading">Silver Spring Lake</h1>
      <h2 className="sub-heading">Employee Information</h2>
      <EmployeeTable employees={employees} />
    </div>
  );
}

export default App;
