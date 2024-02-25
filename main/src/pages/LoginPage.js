import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const MyForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Track login error
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', formData);

      // Assume your login API returns a user object with a 'username' field
      navigate(`/${response.data.username}`);
    } catch (error) {
      console.error('Error sending data:', error);

      // Set the login error
      setLoginError('Invalid username or password');
    }
  };

  return (
    <form className="custom-form" onSubmit={handleSubmit}>
      <h1>Login</h1>
      {loginError && <p className="error-message">{loginError}</p>}
      <label>
        Username:
        <input type="text" className="custom-input" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" className="custom-input" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <br />
      <button className="login_button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default MyForm;
