import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/signup/', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      
      if (response.data) {
        setSuccess('User created successfully! Redirecting to login...');
        setError('');
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError(err.response?.data?.detail || err.response?.data?.error || 'Signup failed. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-bl from-black to-black text-blue-50 flex items-center justify-center">
      <div className="w-11/12 max-w-md p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/30">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-amber-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-amber-500"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="p-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-amber-500"
            required
          />
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 rounded-lg transition-colors"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account? <Link to="/login" className="text-amber-500 hover:underline">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;