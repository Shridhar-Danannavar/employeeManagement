import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css'

const UpdateEmployee = () => {
  const [empId, setEmpId] = useState('');
  const [employee, setEmployee] = useState({
    empName: '',
    age: '',
    email: '',
    phone: '',
    empSalary: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setEmployee(prevEmployee => ({
      ...prevEmployee,
      [name]: value
    }));
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:9000/employeeDetails/${empId}`, employee)
      .then(response => {
        alert('Employee updated successfully');
      })
      .catch(error => {
        console.error('There was an error updating the employee!', error);
      });
  };

  return (
    <div>
      <h2>Update Employee</h2>
      <input
        type="number"
        value={empId}
        onChange={e => setEmpId(e.target.value)}
        placeholder="Enter Employee ID"
      />
      <input
        type="text"
        name="empName"
        value={employee.empName}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="number"
        name="age"
        value={employee.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        type="email"
        name="email"
        value={employee.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="phone"
        value={employee.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <input
        type="number"
        name="empSalary"
        value={employee.empSalary}
        onChange={handleChange}
        placeholder="Salary"
      />
      <button onClick={handleUpdate}>Update Employee</button>
    </div>
  );
};

export default UpdateEmployee;
