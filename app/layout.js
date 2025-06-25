'use client';

import { useEffect } from 'react';
import { fetchAndStorePublicToken } from '@/utils/api';
import Script from 'next/script';

export default function RootLayout({ children }) {
  useEffect(() => {
    fetchAndStorePublicToken();
  }, []);

  return (
    <html lang="en">
      <head>
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="beforeInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
