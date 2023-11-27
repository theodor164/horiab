import Header from "../components/Header";
import { useState } from 'react';

const AccountCreation = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful, you might redirect the user or show a success message
        console.log('Registration successful');
      } else {
        // Handle registration error, show error message to the user, etc.
        console.error('Registration failed');
      }
    } catch (error) {
      // Handle network errors or other issues
      console.error('Error during registration:', error.message);
    }
  };

  const handleChange = (e) => {
    // Update the formData state as the user types
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Header></Header>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <button type="submit">Register</button>
    </form>
    </div>
  );
};

export default AccountCreation;