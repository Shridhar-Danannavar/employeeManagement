const Employee = require('../models/employeeModel');

// Create a new employee
exports.createEmployee = async (req, res) => {
  const { empId, empName, age, email, phone, empSalary } = req.body;

  try {
    const existingEmployee = await Employee.findOne({ empId });
    if (existingEmployee) {
      return res.status(400).json({ error: 'Employee ID already exists' });
    }

    const employee = new Employee({ empId, empName, age, email, phone, empSalary });
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create employee' });
  }
};

// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.status(200).send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get an employee by empId
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findOne({ empId: req.params.empId });
    if (!employee) {
      return res.status(404).send();
    }
    res.status(200).send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update an employee
exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findOneAndUpdate({ empId: req.params.empId }, req.body, { new: true, runValidators: true });
    if (!employee) {
      return res.status(404).send();
    }
    res.status(200).send(employee);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete an employee
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findOneAndDelete({ empId: req.params.empId });
    if (!employee) {
      return res.status(404).send();
    }
    res.status(200).send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
};
