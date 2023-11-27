import Header from "../components/Header";
import { useState } from 'react';
import axios from 'axios';

const LogIn = ({ history }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/login', formData);

      console.log(response.data); // Handle the response as needed

      // For simplicity, let's redirect to a dashboard page on successful login
      history.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error.response.data.error);
      // Handle the error and show a message to the user
    }
  };

  return (
    <div>
      <Header></Header>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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