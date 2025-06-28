'use client';

import { useRouter } from 'next/navigation';
import Image from "next/image";
import CopyRight from '@/components/CopyRight';
import Link from 'next/link';

export default function RegisterTypePage() {
  const router = useRouter();

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
        <div className='register_type_cards flex gap-20'>
          <div className='client_card register_card'>
            <h5>Register As</h5>
            <h2>Client</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <Link href="/register/client" className="register_button">
              Register Now
            </Link>
          </div>
          <div className='employee_card register_card'>
            <h5>Register As</h5>
            <h2>Employee</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <Link href="/register/employee" className="register_button">
              Register Now
            </Link>
          </div>
        </div>
        <CopyRight />
      </div>
    </div>
  );
}
