import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  const loginData =
  {
    email,
    password
  }
  console.log(loginData);

 try {
      const response = await axios.post('http://localhost:5555/login', loginData);
      
      // Handle success
      setSuccessMessage(response.data.message);
      setErrorMessage(''); // Clear any previous error
      // You can now store user info in localStorage or navigate to another page
      // localStorage.setItem('user', JSON.stringify(response.data.user));
    } catch (error) {
      if (error.response) {
        console.log("Data is not going to the Server" , error);
        setErrorMessage(error.response.data.message);
        setSuccessMessage('');
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default Login;
