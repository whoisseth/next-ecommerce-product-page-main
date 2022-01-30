/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import React, { useRef } from "react";
import { Slide } from "react-slideshow-image";
//
import SimpleImageSlider from "react-simple-image-slider";

import { AiOutlineShoppingCart } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const images = [
  { url: "/images/image-product-1.jpg" },
  { url: "/images/image-product-2.jpg" },
  { url: "/images/image-product-3.jpg" },
  { url: "/images/image-product-4.jpg" },
];
const desktopImages = [
  { url: "/images/image-product-1-thumbnail.jpg" },
  { url: "/images/image-product-2-thumbnail.jpg" },
  { url: "/images/image-product-3-thumbnail.jpg" },
  { url: "/images/image-product-4-thumbnail.jpg" },
];

function Main({ addCount, minusCount, count, Cart, price }) {
  const slideRef = useRef();
  const goto = ({ target }) => {
    slideRef.current.goTo(parseInt(target.value, 10));
  };

  return (
    <>
      <div className='lg:m-24   grid grid-cols-1 lg:grid-cols-2 '>
        <div className='left flex flex-col gap-8'>
          <div className='mobile-view lg:hidden'>
            <SimpleImageSlider
              width={"100%"}
              height={300}
              images={images}
              showNavs={true}
              navSize={24}
              navStyle={1}
            />
          </div>
          <div
            className='hidden lg:block w-[24rem] overflow-hidden rounded-xl '
            ref={slideRef}
          >
            <img
              className='h-full w-full'
              src='/images/image-product-1.jpg'
              alt=''
            />
          </div>
          <div
            className='hidden lg:flex
            ImgSlider gap-4 justify-center  w-[24rem]'
          >
            {/* <Carousel> */}
            {desktopImages.map(images => (
              <div key={images.url}>
                <button
                  className='h-22 w-22 overflow-hidden rounded-xl active:ring-2 active:ring-orange active:opacity-50'
                  // onClick={}
                >
                  <img className='h-full w-full' src={images.url} alt='' />
                </button>
              </div>
            ))}
            {/* </Carousel> */}
          </div>
        </div>
        <div className='right p-6 flex gap-4 flex-col mb-16 lg:w-[27rem]'>
          <div className='text-xs text-orange font-bold'>SNEAKER COMPANY</div>
          <div className='font-semibold text-3xl lg:mb-4 lg:text-4xl'>
            Fall Limited Edition Sneakers
          </div>
          <div className=' text-gray-400 lg:text-sm'>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </div>
          <div className='flex items-center justify-between lg:flex-col lg:items-start'>
            <div className='flex items-center gap-4'>
              <div className='text-3xl font-semibold '>${price.toFixed(2)}</div>
              <span className=' font-semibold text-orange bg-pale-orange py-1 px-3 rounded-xl'>
                50%
              </span>
            </div>
            <div className='text-gray-300 font-semibold line-through'>
              $250.00
            </div>
          </div>
          <div className='flex flex-col gap-4 lg:gap-0 lg:flex-row lg:gap    '>
            <div className='font-semibold  flex justify-between space bg-light-grayish-blue rounded-xl py-2 px-4 items-center lg:w-32  '>
              <button
                className='text-orange font-semibold text-3xl'
                onClick={minusCount}
              >
                -
              </button>
              <div>{count} </div>
              <button
                className='text-orange font-semibold text-3xl'
                onClick={addCount}
              >
                +
              </button>
            </div>
            <button
              className='flex bg-orange rounded-xl py-4 justify-center gap-4 text-white font-semibold lg:grow lg:ml-4'
              onClick={Cart}
            >
              <AiOutlineShoppingCart className='h-6 w-6' />
              <div className='font-semibold'>Add to cart</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
