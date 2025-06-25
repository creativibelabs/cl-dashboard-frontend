'use client';

import { useEffect } from 'react';
import axios from 'axios';
import { GoogleLoginApi } from '@/utils/api';

export default function GoogleLogin() {
  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        callback: handleCallbackResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById('googleBtn'),
        { theme: 'outline', size: 'large' }
      );
    }
  }, []);

  const handleCallbackResponse = async (response) => {
    try {

      const res = await GoogleLoginApi( response );

      console.log('Login Success', res);
      // Save token or redirect user
    } catch (err) {
      console.error('Login Failed', err);
    }
  };

  return <div id="googleBtn"></div>;
}
