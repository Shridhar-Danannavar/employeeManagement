import React, { useState } from 'react';
import CreateEmployee from './components/CreateEmployee'; // Replace with your actual component imports
import FetchAllEmployees from './components/FetchAllEmployees'; // Replace with your actual component imports
import FetchEmployeeById from './components/FetchEmployeeById'; // Replace with your actual component imports
import UpdateEmployee from './components/UpdateEmployee'; // Replace with your actual component imports
import DeleteEmployee from './components/DeleteEmployee'; // Replace with your actual component imports

const App = () => {
  const [currentPage, setCurrentPage] = useState('#'); // State to track current page

  const renderPage = () => {
    switch (currentPage) {
      case 'create':
        return <CreateEmployee />; // Example component for creating employee
      case 'fetch-all':
        return <FetchAllEmployees />; // Example component for fetching all employees
      case 'fetch-by-id':
        return <FetchEmployeeById />; // Example component for fetching employee by ID
      case 'update':
        return <UpdateEmployee />; // Example component for updating employee
      case 'delete':
        return <DeleteEmployee />; // Example component for deleting employee
      default:
        return <CreateEmployee />; // Default to create employee page
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li><button onClick={() => setCurrentPage('create')}>Create Employee</button></li>
          <li><button onClick={() => setCurrentPage('fetch-all')}>Fetch All Employees</button></li>
          <li><button onClick={() => setCurrentPage('fetch-by-id')}>Fetch Employee by ID</button></li>
          <li><button onClick={() => setCurrentPage('update')}>Update Employee</button></li>
          <li><button onClick={() => setCurrentPage('delete')}>Delete Employee</button></li>
        </ul>
      </nav>
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
};

export default App;
