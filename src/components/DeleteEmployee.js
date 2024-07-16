import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css'

const DeleteEmployee = () => {
  const [empId, setEmpId] = useState('');

  const handleDelete = () => {
    if (!empId) {
        alert('Employee ID is required to delete');
        return;
      }
    axios.delete(`http://localhost:9000/employeeDetails/${empId}`)
      .then(response => {
        alert('Employee deleted successfully');
      })
      .catch(error => {
        console.error('There was an error deleting the employee!', error);
      });
  };

  return (
    <div>
      <h2>Delete Employee</h2>
      <input
        type="number"
        value={empId}
        onChange={e => setEmpId(e.target.value)}
        placeholder="Enter Employee ID"
      />
      <button onClick={handleDelete}>Delete Employee</button>
    </div>
  );
};

export default DeleteEmployee;
