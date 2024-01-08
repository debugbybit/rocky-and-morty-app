import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const links = [
    { id: 1, link: '/', title: 'Characters' },
    { id: 2, link: '/episodes', title: 'Episodes' },
  ];

  return (
    <Toolbar className='container mx-auto flex items-center justify-between bg-gray-800'>
      <div className='flex items-center'>
        <div className='mr-4'>
          <Image
            src='/images/ricky-morty-logo.png'
            alt='Logo'
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            src='/images/ricky-morty-logo-text.png'
            alt='Logo'
            width={200}
            height={50}
          />
        </div>
      </div>

      <ul className='hidden space-x-4 md:flex'>
        {links.map(({ id, link, title }) => (
          <li
            key={id}
            className='nav-links text-gray-300 transition duration-300 hover:text-white transform hover:scale-105'
          >
            <Link href={link}>{title}</Link>
          </li>
        ))}
      </ul>

      <IconButton
        edge='start'
        color='inherit'
        aria-label='menu'
        onClick={handleMobileMenuToggle}
        className='text-gray-300 lg:hidden'
      >
        {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </IconButton>

      {isMobileMenuOpen && (
        <ul
          className={`absolute right-0 top-16 z-10 flex h-screen w-full transform flex-col items-end bg-gray-800 transition-transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <IconButton
            edge='end'
            color='inherit'
            aria-label='close-menu'
            onClick={() => setMobileMenuOpen(false)}
            className='absolute right-4 top-4 text-gray-300'
          >
            <FaTimes size={30} />
          </IconButton>
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className='nav-links w-full py-4 text-center text-2xl text-gray-300 hover:text-white transition duration-300'
            >
              <Link onClick={() => setMobileMenuOpen(false)} href={link}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Toolbar>
  );
};

export default Navbar;
