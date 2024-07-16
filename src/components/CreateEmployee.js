import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const CreateEmployee = () => {
  const initialValues = {
    empId: '',
    empName: '',
    age: '',
    email: '',
    phone: '',
    empSalary: '',
  };

  const validationSchema = Yup.object({
    empId: Yup.number().required('Employee ID is required'),
    empName: Yup.string().required('Employee Name is required'),
    age: Yup.number().required('Age is required').positive().integer(),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    empSalary: Yup.number().required('Employee Salary is required').positive(),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.get(`http://localhost:9000/employeeDetails/${values.empId}`);
      if (response.data) {
        alert(`Employee ID ${values.empId} is already taken. Please choose another ID.`);
      } else {
        await axios.post('http://localhost:9000/employeeDetails', values);
        alert('Employee created successfully');
        resetForm();
      }
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  

  return (
    <div>
      <h2>Create Employee</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="number"
          name="empId"
          value={formik.values.empId}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Employee ID"
        />
        {formik.touched.empId && formik.errors.empId ? (
          <div>{formik.errors.empId}</div>
        ) : null}

        <input
          type="text"
          name="empName"
          value={formik.values.empName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Name"
        />
        {formik.touched.empName && formik.errors.empName ? (
          <div>{formik.errors.empName}</div>
        ) : null}

        <input
          type="number"
          name="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Age"
        />
        {formik.touched.age && formik.errors.age ? (
          <div>{formik.errors.age}</div>
        ) : null}

        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Email"
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <input
          type="text"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Phone"
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div>{formik.errors.phone}</div>
        ) : null}

        <input
          type="number"
          name="empSalary"
          value={formik.values.empSalary}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Salary"
        />
        {formik.touched.empSalary && formik.errors.empSalary ? (
          <div>{formik.errors.empSalary}</div>
        ) : null}

        <button type="submit">Create Employee</button>
      </form>
    </div>
  );
};

export default CreateEmployee;
