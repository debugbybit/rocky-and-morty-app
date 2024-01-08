import IconButton from '@mui/material/IconButton';
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
    <div className='container mx-auto flex items-center justify-between bg-gray-800 p-4'>
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

      <IconButton
        edge='start'
        color='inherit'
        aria-label='menu'
        onClick={handleMobileMenuToggle}
        className='text-gray-300 lg:hidden'
      >
        {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </IconButton>

      {isMobileMenuOpen ? (
        <ul
          className={`absolute right-0 top-0 z-10 flex flex-col items-end bg-gray-800 w-full transform transition-transform ${
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
      ) : (
        <ul className='hidden md:flex space-x-4'>
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className='nav-links text-gray-300 transition duration-300 hover:text-white hover:scale-105'
            >
              <Link href={link}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
