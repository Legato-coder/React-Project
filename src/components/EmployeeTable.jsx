import React from "react";

// EmployeeTable component
const EmployeeTable = ({ employees }) => {
  return (
    <table border="1" cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Department</th>
          <th>Car</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp, index) => (
          <tr key={index}>
            <td>{emp.name}</td>
            <td>{emp.city}</td>
            <td>{emp.department}</td>
            <td>{emp.car}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
