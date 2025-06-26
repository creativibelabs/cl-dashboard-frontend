'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function RootLayout({ children }) {

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
