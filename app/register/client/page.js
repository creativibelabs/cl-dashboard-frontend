'use client';
import { useState } from 'react';
import axios from 'axios';
import { getPublicToken } from '@/utils/PublicApiToken';

export default function ClientRegisterPage() {

  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
    agree: false,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let PublicToken = getPublicToken();
    
    if (!form.agree) {
      return alert('You must agree to the Privacy Policy');
    }

    try {
      const res = await axios.post(`${apiBase}/register-client`, form,{
        headers: {
          'Content-Type': 'application/json',
          'PUBLIC-API-TOKEN': PublicToken,
          'Accept': 'application/json'
        },
      });
      setMessage('Registered successfully! Token: ' + res.data.access_token);
    } catch (err) {
      if (err.response) {
        setMessage('Error: ' + JSON.stringify(err.response.data.errors));
      } else {
        setMessage('Something went wrong.');
      }
    }
  };

  return (
    <div>
      <h2>Register as Client</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} /><br />
        <input name="email" placeholder="Email" onChange={handleChange} /><br />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} /><br />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br />
        <input name="password_confirmation" type="password" placeholder="Confirm Password" onChange={handleChange} /><br />
        <label>
          <input type="checkbox" name="agree" onChange={handleChange} />
          I agree to the Privacy Policy
        </label><br />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
