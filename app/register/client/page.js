'use client';
import { useState } from 'react';
import { RegisterClient } from '@/utils/api';
import GoogleLogin from '@/components/GoogleLogin';
import CopyRight from '@/components/CopyRight';
import Image from "next/image";
import Link from 'next/link';

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
    <div className="auth_screen">
      <div className='wrapper'>
        <div className='header'>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={300}
            height={57.19}
          />
        </div>
        <div className='form_section'>
          <div className='text_section'>
            <h2>Welcome!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <div class="login_text_section">
              <p>Already have an account?</p>
              <Link href="/login" className="login_button">
                Login
              </Link>
            </div>
          </div>
          <div className='form'>
            <h2>Register</h2>
            <p>Create your account to get started.</p>
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
        </div>
        <CopyRight />
      </div>
    </div>
  );
}
