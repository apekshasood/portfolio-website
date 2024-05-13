import Link from 'next/link';
import Image from 'next/image'; // Import the Image component from Next.js
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex flex-wrap items-center justify-between p-8'>
            <Image
                src="/images/Logo.svg"
                alt="Home"
                width={150}
                height={150}
            />
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className='flex md:flex-row md:space-x-16'>
                    <li>
                        <Link href={"about"} className='block py-2 pl-3 pr-4 text-[#C5C4CA] sm:text-xl font-bold rounded md:p-0 hover:text-[#C652EE]'>HOME</Link></li>
                    <li><Link href={"about"} className='block py-2 pl-3 pr-4 text-[#C5C4CA] sm:text-xl font-bold rounded md:p-0 hover:text-[#C652EE]'>ABOUT</Link></li>

                    <li><Link href={"about"} className='block py-2 pl-3 pr-4 text-[#C5C4CA] sm:text-xl font-bold rounded md:p-0 hover:text-[#C652EE]'>EXPERIENCE</Link></li>
                    <li><Link href={"about"} className='block py-2 pl-3 pr-4 text-[#C5C4CA] sm:text-xl rounded font-bold md:p-0 hover:text-[#C652EE]'>CONTACT</Link></li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;
