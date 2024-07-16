// src/components/FetchEmployeeById.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css'; // Import your CSS file

const FetchEmployeeById = () => {
  const [employee, setEmployee] = useState(null);
  const [empId, setEmpId] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const fetchEmployeeById = async () => {
    try {
      const response = await axios.get(`http://localhost:9000/employeeDetails/${empId}`);
      setEmployee(response.data);
      setShowDetails(true); // Show details after fetching employee successfully
    } catch (error) {
      console.error('Failed to fetch employee:', error.response.data);
      setEmployee(null);
      setShowDetails(false);
    }
  };

  const handleFetchById = () => {
    if (empId.trim() === '') {
      alert('Please enter an Employee ID');
      return;
    }
    fetchEmployeeById();
  };

  const handleHideDetails = () => {
    setShowDetails(false);
    setEmpId('');
    setEmployee(null);
  };

  return (
    <div>
      <h2>Fetch Employee by ID</h2>
      <label>
        Employee ID:
        <input className="emp" type="text" value={empId} onChange={(e) => setEmpId(e.target.value)} />
      </label>
      <button onClick={handleFetchById}>Fetch Employee</button>
      <button onClick={handleHideDetails} style={{ marginLeft: '10px' }}>
        Hide Details
      </button>

      {showDetails && employee && (
        <div className="employee-details">
          <h3>Employee Details</h3>
          <p><strong>Employee ID:</strong> {employee.empId}</p>
          <p><strong>Name:</strong> {employee.empName}</p>
          <p><strong>Age:</strong> {employee.age}</p>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Phone:</strong> {employee.phone}</p>
          <p><strong>Salary:</strong> {employee.empSalary}</p>
        </div>
      )}

      {showDetails && !employee && <p>No employee found with ID: {empId}</p>}
    </div>
  );
};

export default FetchEmployeeById;
