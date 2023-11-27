import Header from "../components/Header";
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LogIn =  () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { login } = useAuth();
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make sure to send the login credentials in the request body
      const response = await axios.post('http://localhost:3001/api/login', formData);

      // Assuming the login is successful, call the login function from the AuthContext
      login();

      // Redirect to a protected page (dashboard in this case)
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error.response.data.error);
      // Handle the error and show a message to the user
    }
  };

  return (
    <div>
      <Header></Header>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LogIn;