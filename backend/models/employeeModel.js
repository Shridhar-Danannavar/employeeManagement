const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  empId: {
    type: Number,
    required: true,
    unique: true
  },
  empName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  empSalary: {
    type: Number,
    required: true
  }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
