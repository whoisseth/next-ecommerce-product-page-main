/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

function Navbar({ count, price }) {
  const [showMe, setShowMe] = useState(true);
  const [cart, setCart] = useState(true);

  function toggleCart() {
    setCart(!cart);
  }
  console.log(cart);
  function toggle() {
    setShowMe(!showMe);
  }
  return (
    <>
      <nav className=' flex justify-between px-8 md:px-24 items-center py-6 relative z-50'>
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
        <div className='right flex items-center gap-4 lg:gap-8'>
          <button>
            <AiOutlineShoppingCart
              className='relative h-8 w-8'
              onClick={toggleCart}
            />
            <div
              className={` ${
                count > 0 ? "flex" : "hidden"
              }  absolute bg-orange text-white rounded-full text-center text-sm px-2 top-4 right-[4.5rem]  `}
            >
              {count}
            </div>
            <div
              className={` ${
                cart ? "hidden" : "flex"
              }    absolute  bg-white rounded-lg top-[6rem] overflow-hidden p-4  flex-col gap-4 shadow-md shadow-gray-200    lg:w-[22rem] lg:right-[2rem] 
             `}
            >
              {/* <div
              className='absolute  bg-white rounded-lg top-[6rem] overflow-hidden p-4 flex flex-col gap-4 shadow-md shadow-gray-200   sm:inset-x-0 mx-4 lg:w-[24rem] lg:right-[8rem] md:bg-blue-200
             '
            > */}
              <p className=' font-semibold text-left'>Cart</p>
              <hr className='w-full' />
              {count > 0 ? (
                <div className='2 flex items-center gap-4 justify-between w-full '>
                  <img
                    className='h-12 w-12 rounded-lg
                   '
                    src='/images/image-product-1-thumbnail.jpg'
                    alt='cart-img'
                  />
                  <div className=' text-sm text-gray-400 text-left '>
                    <p>Autumn Limited Edition...</p>
                    <p>
                      ${price.toFixed(2)} x {count}&nbsp;
                      <span className='font-semibold text-black'>
                        ${(price * count).toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <FaTrashAlt className='ml-4 text-gray-300' />
                </div>
              ) : (
                <div className='text-gray-400 text-semibold text-sm'>
                  {" "}
                  You cart is empty
                </div>
              )}

              <button
                className='3 bg-orange rounded-lg px-full
              text-white w-full py-2'
              >
                Checkout
              </button>
            </div>
          </button>
          <div className='h-8 w-8 lg:h-10 lg:w-10 bg-blue-100 rounded-full'>
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
