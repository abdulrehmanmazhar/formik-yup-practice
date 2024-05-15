import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const onSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="exampleInputName">Name</label>
            <Field type="text" className="form-control" id="exampleInputName" name="name" placeholder="Enter name" />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <Field type="email" className="form-control" id="exampleInputEmail1" name="email" placeholder="Enter email" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <Field type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword2">Confirm Password</label>
            <Field type="password" className="form-control" id="exampleInputPassword2" name="confirmPassword" placeholder="Confirm Password" />
            <ErrorMessage name="confirmPassword" component="div" className="error-message" />
          </div>
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default App;
