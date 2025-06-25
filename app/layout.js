'use client';

import { useEffect } from 'react';
import { fetchAndStorePublicToken } from '@/utils/PublicApiToken';

export default function RootLayout({ children }) {
  useEffect(() => {
    fetchAndStorePublicToken();
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
