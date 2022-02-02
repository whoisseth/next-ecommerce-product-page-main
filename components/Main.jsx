/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import React, { useRef } from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const images = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg",
];

function Main({ addCount, minusCount, count, Cart, price, addCartbtnFun }) {
  let [selectedImg, setSelectedImg] = useState(images[0]);
  let [countImg, setCountImg] = useState(0);
  function nextImg() {
    if (countImg >= images.length - 1) {
      selectedImg = setSelectedImg(images[0]);
      countImg = setCountImg(0);
    } else {
      selectedImg = setSelectedImg(images[countImg + 1]);
      countImg = setCountImg(countImg + 1);
    }
  }
  function preImg() {
    if (countImg === 0) {
      selectedImg = setSelectedImg(images[images.length - 1]);
      countImg = setCountImg(images.length - 1);
    } else {
      selectedImg = setSelectedImg(images[countImg - 1]);
      countImg = setCountImg(countImg - 1);
    }
  }
  console.log(selectedImg);
  console.log(countImg);
  console.log(images[countImg]);
  return (
    <>
      <div className='lg:m-24   grid grid-cols-1 lg:grid-cols-2 items-center relative  '>
        <ImageSlider />

        <div className='right p-6 flex gap-4 flex-col mb-16 lg:w-[27rem]'>
          <div className='text-xs text-orange font-bold'>SNEAKER COMPANY</div>
          <div className='font-semibold text-3xl lg:mb-4 lg:text-4xl'>
            Fall Limited Edition Sneakers
          </div>
          <div className=' text-gray-400 lg:text-sm'>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they&#8217;ll withstand
            everything the weather can offer.
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
                className='text-orange font-semibold text-3xl hover:opacity-70'
                onClick={minusCount}
              >
                -
              </button>
              <div>{count} </div>
              <button
                className='text-orange font-semibold text-3xl hover:opacity-70'
                onClick={addCount}
              >
                +
              </button>
            </div>
            <button
              className='flex bg-orange rounded-xl py-4 justify-center gap-4 text-white font-semibold lg:grow lg:ml-4 hover:opacity-70 '
              onClick={count > 0 ? addCartbtnFun : console.log("count is zero")}
            >
              <AiOutlineShoppingCart className='h-6 w-6' />
              <div className='font-semibold '>Add to cart</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );

  function ImageSlider() {
    return (
      <>
        <div className='left flex flex-col gap-8'>
          <div className='lg: '>
            <div className='flex  relative   bg-red-400 items-center    w-full h-auto lg:w-[24rem]   '>
              <img
                className='h-full w-full lg:rounded-xl '
                src={selectedImg}
                alt=''
                // onClick={}
              />
              <button
                className='lg:hidden absolute left-2 text-2xl overflow-auto bg-white  p-1.5  rounded-full   '
                onClick={preImg}
              >
                <GrFormPrevious className='font-bold ' />
              </button>
              <button
                className='lg:hidden absolute right-2  text-2xl overflow-auto bg-white  p-1.5  rounded-full'
                onClick={nextImg}
              >
                <GrFormNext />
              </button>
            </div>
          </div>

          <div
            className='hidden lg:flex
            ImgSlider gap-4 justify-center  w-[24rem]'
          >
            {images.map((images, index) => (
              <div key={index}>
                <button
                  className={` h-22 w-22 overflow-hidden rounded-xl active:ring-2 
                   ${
                     selectedImg === images
                       ? "ring-2 ring-orange transition delay-75 ease-linear "
                       : ""
                   } focus:ring-orange`}
                  onClick={() => setSelectedImg(images)}
                >
                  <img
                    className={`h-full w-full hover:opacity-50 ${
                      selectedImg === images ? " opacity-50 " : ""
                    }`}
                    src={images}
                    alt=''
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  function ImagePreviewSlider() {
    return <></>;
  }
}

export default Main;
