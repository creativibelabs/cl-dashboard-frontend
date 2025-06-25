'use client';
import { useState } from 'react';
import { RegisterClient } from '@/utils/api';
import GoogleLogin from '@/components/GoogleLogin';

export default function ClientRegisterPage() {

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
    
    if (!form.agree) {
      return alert('You must agree to the Privacy Policy');
    }
    try {
      let registerResponse = await RegisterClient(form);
      console.log( registerResponse );
      setMessage( 'Hello' );

    } catch( err ) {
      console.log( err );
    }
  };

  return (
    <div>
      <h2>Register as Client</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" autoComplete="false" placeholder="Full Name" onChange={handleChange} /><br />
        <input name="email" autoComplete="false" placeholder="Email" onChange={handleChange} /><br />
        <input name="phone" autoComplete="false" placeholder="Phone Number" onChange={handleChange} /><br />
        <input name="password" autoComplete="false" type="password" placeholder="Password" onChange={handleChange} /><br />
        <input name="password_confirmation" autoComplete="false" type="password" placeholder="Confirm Password" onChange={handleChange} /><br />
        <label>
          <input type="checkbox" name="agree" onChange={handleChange} />
          I agree to the Privacy Policy
        </label><br />
        <button type="submit">Register</button>
        <p>or</p>
        <GoogleLogin />
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
