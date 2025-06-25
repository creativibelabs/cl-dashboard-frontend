'use client';

import { useRouter } from 'next/navigation';

export default function RegisterTypePage() {
  const router = useRouter();

  return (
    <div>
      <h1>Register As</h1>
      <button onClick={() => router.push('/register/client')}>Client</button>
      <button onClick={() => router.push('/register/employee')}>Employee</button>
    </div>
  );
}
