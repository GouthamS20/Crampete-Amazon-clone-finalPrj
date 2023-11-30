import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login logic here');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-amazonclone-background">
      <div className="max-w-md w-full p-8 bg-white shadow-md rounded-md">
        <img src={'../images/amazon.png'} alt="Amazon logo" className="mx-auto mb-6" />
        <h3 className="text-2xl font-semibold text-center mb-4">Login</h3>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="form-group">
            <label className="block mb-1">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div className="form-group">
            <label className="block mb-1">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <Link to={"/"}>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-3">
              Login
            </button>
          </Link>
          <Link to="/register" className="text-blue-500 text-center mt-3 ml-4">
            Register
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
