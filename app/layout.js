'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import './globals.css'
import { Maven_Pro } from 'next/font/google';

const mavenPro = Maven_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-maven-pro',
});

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={mavenPro.variable}>
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
