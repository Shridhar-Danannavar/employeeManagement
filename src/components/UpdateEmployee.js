import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css'

const UpdateEmployee = () => {
  const [empId, setEmpId] = useState('');
  const [employee, setEmployee] = useState(null);
  const [isFetched, setIsFetched] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setEmployee(prevEmployee => ({
      ...prevEmployee,
      [name]: value
    }));
  };

  const handleFetch = () => {
    if (!empId) {
      alert('Please enter an Employee ID.');
      return;
    }
    axios.get(`http://localhost:9000/employeeDetails/${empId}`)
      .then(response => {
        setEmployee(response.data);
        setIsFetched(true);
      })
      .catch(error => {
        console.error('There was an error fetching the employee details!', error);
        setIsFetched(false);
      });
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
      {!isFetched ? (
        <div>
          <input className="emp"
            type="number"
            value={empId}
            onChange={e => setEmpId(e.target.value)}
            placeholder="Enter Employee ID"
          />
          <button onClick={handleFetch}>Fetch Employee</button>
        </div>
      ) : (
        <div>
          <input className="emp"
            type="text"
            name="empName"
            value={employee.empName}
            onChange={handleChange}
            placeholder="Name"
          />
          <input className="emp"
            type="number"
            name="age"
            value={employee.age}
            onChange={handleChange}
            placeholder="Age"
          />
          <input className="emp"
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input className="emp"
            type="text"
            name="phone"
            value={employee.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          <input className="emp"
            type="number"
            name="empSalary"
            value={employee.empSalary}
            onChange={handleChange}
            placeholder="Salary"
          />
          <button onClick={handleUpdate}>Update Employee</button>
        </div>
      )}
    </div>
  );
};

export default UpdateEmployee;
