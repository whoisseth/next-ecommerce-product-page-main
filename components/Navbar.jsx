/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
function Navbar() {
  const [showMe, setShowMe] = useState(true);
  function toggle() {
    setShowMe(!showMe);
  }
  return (
    <>
      <nav className=' flex justify-between px-8 md:px-24 items-center py-8 relative'>
        <div className='left flex items-center gap-8'>
          <div className='flex items-center gap-4'>
            <button className='md:hidden' onClick={toggle}>
              <img src='/images/icon-menu.svg' alt='' />
            </button>
            <div className='logo'>
              <img src='/images/logo.svg' alt='' />
            </div>
          </div>
          <div
            className={` ${
              showMe ? "hidden" : "flex"
            }  text-black font-bold bg-white flex-col absolute left-0 top-0  h-screen p-8 w-56 lg:static lg:flex lg:h-0 lg:auto lg:font-normal lg:flex-row  lg:bg-none lg:items-center  lg:text-gray-400  gap-8 `}
          >
            <button className=' lg:hidden mt-3 mb-8' onClick={toggle}>
              <img src='/images/icon-close.svg' alt='' />
            </button>
            <Link href='/'>
              <a href=''>Collections</a>
            </Link>
            <Link href='/'>
              <a href=''>Men</a>
            </Link>
            <Link href='/'>
              <a href=''>Women</a>
            </Link>
            <Link href='/'>
              <a href=''>About</a>
            </Link>
            <Link href='/'>
              <a href=''>Contact</a>
            </Link>
          </div>
        </div>
        <div className='right flex items-center gap-8'>
          <div>
            <img src='/images/icon-cart.svg' alt='' />
          </div>
          <div className='h-10 w-10 bg-blue-100 rounded-full'>
            <img
              className='h-full w-full'
              src='/images/image-avatar.png'
              alt=''
            />
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
