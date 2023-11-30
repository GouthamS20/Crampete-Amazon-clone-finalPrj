import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.includes('@')) {
      newErrors.email = 'Email must contain @';
    }

    if (!/(?=.*\d)(?=.*[A-Z])(?=.*\W)/.test(formData.password)) {
      newErrors.password =
        'Password must contain at least one number, one uppercase letter, and one special character';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Update the errors state
    setErrors(newErrors);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-amazonclone-background">
      <div className="max-w-md w-full p-8 bg-white shadow-md rounded-md">
        <img src={'../images/amazon.png'} alt="Amazon logo" className="mx-auto mb-6" />
        <h3 className="text-2xl font-semibold text-center mb-4">Registration Form</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label className="block mb-1">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2"
            />
            <div className="text-red-500 text-sm">{errors.name}</div>
          </div>
          <div className="form-group">
            <label className="block mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2"
            />
            <div className="text-red-500 text-sm">{errors.email}</div>
          </div>
          <div className="form-group">
            <label className="block mb-1">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2"
            />
            <div className="text-red-500 text-sm">{errors.password}</div>
          </div>
          <div className="form-group">
            <label className="block mb-1">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2"
            />
            <div className="text-red-500 text-sm">{errors.confirmPassword}</div>
          </div>
          <div className="button-container">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
              Register
            </button>
            <Link to="/login" className="text-blue-500">
              <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded ml-3">
                Login
              </button>
            </Link>
          </div>
        </form>
        {successMessage && <div className="text-green-600 mt-4">{successMessage}</div>}
      </div>
    </div>
  );
}

export default RegisterPage;
