const express = require('express');
const router = express.Router();
const {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
} = require('../controllers/employeeController');

router.post('/', createEmployee);
router.get('/', getAllEmployees);
router.get('/:empId', getEmployeeById);
router.put('/:empId', updateEmployee);
router.delete('/:empId', deleteEmployee);

module.exports = router;
