import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:x-10 '>
      <Link href='/' className='flex items-center gap-1'>
        <Image
          src='/icons/logo.svg'
          alt='Loop logo'
          width={32}
          height={32}
          className='max-sm:size-10'
        />
        <div className='text-[26px] font-extrabold text-white max-sm:hidden'>
          Loop
        </div>
      </Link>
      <div className='flex-between gap-5'>
        {/* Clerk user management */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
