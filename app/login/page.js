'use client';

import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Email:</label><br />
        <input type="email" name="email" /><br />

        <label>Password:</label><br />
        <input type="password" name="password" /><br />

        <button type="submit">Login</button>
      </form>

      <button onClick={() => router.push('/register')}>
        Register
      </button>
    </div>
  );
}
