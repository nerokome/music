import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { CiSearch } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { IoMusicalNoteOutline } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between h-24 w-full mx-auto px-4 font-semibold text-xl text-gray-800 sm:text-gray-200 bg-transparent'>
      <div className='flex text-amber-100 pt-4'>
        <CiWallet size={50} />
        <IoMusicalNoteOutline  size={50}/>
      </div>

      <ul className='hidden lg:flex'>
        <li className='p-4 hover:text-red-400'>
          <Link to="/Products">Home</Link>
        </li>
        <li className='p-4 hover:text-red-400'>
          <Link to="/About">About</Link>
        </li>
        <li className='p-4 hover:text-red-400'>
          <Link to="/Partners">Partners</Link>
        </li>
        <li className='p-4 hover:text-red-400'>
          <Link to="/Partners">Resources</Link>
        </li>
        <li className='p-4 hover:text-red-400'>
          <Link to="/">team</Link>
        </li>
        <li className='p-4 hover:text-red-400'>
          <Link to="/">Join us</Link>
        </li>
        <li className='p-4 hover:text-red-400'>
          <Link to="/Contact">Contacts</Link>
        </li>
      </ul>
      <div className='hidden lg:flex gap-3 p-3'>
        <button className="bg-red-400 hover:bg-red-500 text-white text-sm font-mono py-2 px-3 h-10 sm:px-4 sm:py-2
             rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Sign in
            </button>
             <button className="bg-red-400 hover:bg-red-500 text-white text-sm font-mono py-2 px-3 h-10 sm:px-4
             rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Sign up
            </button>
      </div>

      <div onClick={handleNav} className='block lg:hidden z-10 pt-6'>
        {!nav ? <AiOutlineMenu color='gray' size={30} /> : <AiOutlineClose size={20} color='gray' />}
      </div>

      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-full h-full bg-slate-900 ease-in-out duration-600 md:hidden'
            : 'fixed left-[-100%]'
        }
      >
         <div className='flex'>
        <CiWallet size={50} color='gray' />
        <IoMusicalNoteOutline  size={50} color='gray'/>
      </div>
        <ul className='cursor-grab'>
          <li className='p-4 border-b border-gray-400 text-gray-200 hover:text-gray-500'>
            <Link to="/Products" onClick={handleNav}>Home</Link>
          </li>
          <li className='p-4 border-b border-gray-400  text-gray-200 hover:text-gray-500'>
            <Link to="/Partners" onClick={handleNav}>Partners</Link>
          </li>
          <li className='p-4 border-b border-gray-400  text-gray-200 hover:text-gray-500'>
            <Link to="/Resources" onClick={handleNav}>Resources</Link>
          </li>
          <li className='p-4 border-b border-gray-400  text-gray-200 hover:text-gray-500'>
            <Link to="/About" onClick={handleNav}>About</Link>
          </li>
           <li className='p-4 border-b border-gray-400  text-gray-200 hover:text-gray-500'>
            <Link to="/About" onClick={handleNav}>Join us</Link>
          </li>
           <li className='p-4 border-b border-gray-400  text-gray-200 hover:text-gray-500'>
            <Link to="/About" onClick={handleNav}>Team</Link>
          </li>
          <li className='p-4 border-b border-gray-400  text-gray-200 hover:text-gray-500'>
            <Link to="/Contact" onClick={handleNav}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
