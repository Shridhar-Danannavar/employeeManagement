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
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <button
              onClick={() => setCurrentPage('create')}
              style={{
                ...styles.navButton,
                backgroundColor: currentPage === 'create' ? '#007BFF' : 'transparent',
                color: currentPage === 'create' ? '#FFF' : '#000',
              }}
            >
              Create Employee
            </button>
          </li>
          <li style={styles.navItem}>
            <button
              onClick={() => setCurrentPage('fetch-all')}
              style={{
                ...styles.navButton,
                backgroundColor: currentPage === 'fetch-all' ? '#007BFF' : 'transparent',
                color: currentPage === 'fetch-all' ? '#FFF' : '#000',
              }}
            >
              Fetch All Employees
            </button>
          </li>
          <li style={styles.navItem}>
            <button
              onClick={() => setCurrentPage('fetch-by-id')}
              style={{
                ...styles.navButton,
                backgroundColor: currentPage === 'fetch-by-id' ? '#007BFF' : 'transparent',
                color: currentPage === 'fetch-by-id' ? '#FFF' : '#000',
              }}
            >
              Fetch Employee by ID
            </button>
          </li>
          <li style={styles.navItem}>
            <button
              onClick={() => setCurrentPage('update')}
              style={{
                ...styles.navButton,
                backgroundColor: currentPage === 'update' ? '#007BFF' : 'transparent',
                color: currentPage === 'update' ? '#FFF' : '#000',
              }}
            >
              Update Employee
            </button>
          </li>
          <li style={styles.navItem}>
            <button
              onClick={() => setCurrentPage('delete')}
              style={{
                ...styles.navButton,
                backgroundColor: currentPage === 'delete' ? '#007BFF' : 'transparent',
                color: currentPage === 'delete' ? '#FFF' : '#000',
              }}
            >
              Delete Employee
            </button>
          </li>
        </ul>
      </nav>
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
};

const styles = {
  nav: {
    marginBottom: '20px',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: "space-around",
  },
  navItem: {
    margin: '0 5px',
  },
  navButton: {
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
};

export default App;
