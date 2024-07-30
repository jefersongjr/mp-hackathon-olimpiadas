// src/app/components/Header.tsx
import React, { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../assets/olimpiadas.png';
import NavBar from './NavBar';
import NavBarMobile from './NavBarMobile';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-100 border-b-2 border-gray-200 text-gray-800 flex fixed top-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-24">
        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center text-gray-800 justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <CiMenuBurger className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        {/* Logo and Desktop Navbar */}
        <div className="flex-1 flex items-center justify-center space-x-10">
          <Link href="/" passHref>
  
              <Image
                className="h-18 w-20 hover:h-20"
                src={logo}
                alt="Logo"
                width={80}
                height={72}
              />

          </Link>
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <NavBar />
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      {isOpen && (
        <div className="lg:hidden bg-white text-gray-800 border-b border-gray-200 fixed top-24 left-0 right-0 z-40">
          <NavBarMobile />
        </div>
      )}
    </header>
  );
};

export default Header;
