// src/components/FetchAllEmployees.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles.css'; // Import your CSS file

const FetchAllEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:9000/employeeDetails');
      setEmployees(response.data);
      setShowTable(true); // Show table after fetching employees successfully
    } catch (error) {
      console.error('Failed to fetch employees:', error.response.data);
    }
  };

  const toggleTable = () => {
    setShowTable(!showTable); // Toggle the state of showTable
  };

  return (
    <div >
      <h2>All Employees</h2>
      <button className="toggle-button" onClick={toggleTable}>{showTable ? 'Hide Employees' : 'Fetch Employees'}</button>
      {showTable && employees.length > 0 && (
        <table className="employee-table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.empId}>
                <td>{employee.empId}</td>
                <td>{employee.empName}</td>
                <td>{employee.age}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.empSalary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {showTable && employees.length === 0 && <p>No employees found.</p>}
    </div>
  );
};

export default FetchAllEmployees;
