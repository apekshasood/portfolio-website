import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react'; // Import useState from React

const Navbar = () => {
    // State to manage the visibility of the menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu visibility
    const toggleMenu = () => {
        console.log("first", isMenuOpen)
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='flex items-center justify-between p-8'>
            {/* Logo */}
            <Image
                src="/images/Logo.svg"
                alt="Home"
                width={150}
                height={150}
            />
            {/* Hamburger menu icon */}
            <div className="block md:hidden" onClick={toggleMenu}>
                <svg className="w-6 h-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </div>
            {/* Menu */}
            <div className={`absolute top-full right-0 md:relative md:flex md:items-center md:space-x-16 md:w-auto bg-[#21242E] text-white ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar">
                <ul className='flex flex-col md:flex-row md:space-x-16'>
                    <li><Link href={"about"} className='block py-2 pl-3 pr-4 text-[#C5C4CA] sm:text-xl font-bold rounded md:p-0 hover:text-[#C652EE]'>HOME</Link></li>
                    <li><Link href={"about"} className='block py-2 pl-3 pr-4 text-[#C5C4CA] sm:text-xl font-bold rounded md:p-0 hover:text-[#C652EE]'>ABOUT</Link></li>
                    <li><Link href={"about"} className='block py-2 pl-3 pr-4 text-[#C5C4CA] sm:text-xl font-bold rounded md:p-0 hover:text-[#C652EE]'>EXPERIENCE</Link></li>
                    <li><Link href={"about"} className='block py-2 pl-3 pr-4 text-[#C5C4CA] sm:text-xl rounded font-bold md:p-0 hover:text-[#C652EE]'>CONTACT</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
