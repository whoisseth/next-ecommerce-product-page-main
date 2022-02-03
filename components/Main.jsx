/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import React, { useRef } from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

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
  const [imgPreiw, setImgPeview] = useState(true);

  console.log(selectedImg);
  console.log(countImg);
  console.log(images[countImg]);
  return (
    <>
      <div className='h-[60vh]'>
        <div
          className={` hidden lg:${
            imgPreiw ? "hidden" : "block"
          } absolute top-0 right-0 h-full w-full bg-black opacity-80 z-50`}
        />
        <ImagePreviewSlider />
        <div className='lg:m-24 lg:mt-12   grid grid-cols-1 lg:grid-cols-2 items-center relative  '>
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
                <div className='text-3xl font-semibold '>
                  ${price.toFixed(2)}
                </div>
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
                onClick={
                  count > 0 ? addCartbtnFun : console.log("count is zero")
                }
              >
                <AiOutlineShoppingCart className='h-6 w-6' />
                <div className='font-semibold '>Add to cart</div>
              </button>
            </div>
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
                className='h-full w-full lg:rounded-xl cursor-pointer '
                src={selectedImg}
                alt=''
                onClick={() => setImgPeview(false)}
              />
              <button
                className='lg:hidden absolute left-2 text-3xl overflow-auto bg-white  p-1  rounded-full    '
                onClick={preImg}
              >
                <MdNavigateBefore className='font-bold h-8 w-8  hover:text-orange ' />
              </button>
              <button
                className='lg:hidden absolute right-2  text-2xl overflow-auto bg-white  p-1  rounded-full'
                onClick={nextImg}
              >
                <MdNavigateNext className=' font-bold h-8 w-8  hover:text-orange' />
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
    return (
      <>
        <div>
          <div
            className={` hidden lg:${
              imgPreiw ? "hidden" : "flex"
            } absolute left  flex-col gap-6 h-screen w-screen  justify-center items-center top-0 right-0  z-50 overscroll-none `}
          >
            <div className=' '>
              <div className='flex  relative    items-center    w-full h-auto lg:w-[26rem]   '>
                <img
                  className='h-full w-full lg:rounded-xl '
                  src={selectedImg}
                  alt=''
                />
                <button
                  className='absolute right-0 -top-10'
                  onClick={() => setImgPeview(true)}
                >
                  <IoMdClose className='text-white text-3xl hover:text-orange' />
                </button>
                <button
                  className=' absolute -left-4 text-2xl overflow-auto bg-white  p-1  rounded-full    '
                  onClick={preImg}
                >
                  <MdNavigateBefore className='font-bold h-8 w-8  hover:text-orange ' />
                </button>
                <button
                  className=' absolute -right-4  text-2xl overflow-auto bg-white  p-1  rounded-full'
                  onClick={nextImg}
                >
                  <MdNavigateNext className=' font-bold h-8 w-8  hover:text-orange' />
                </button>
              </div>
            </div>

            <div
              className='hidden lg:flex
            ImgSlider gap-4 justify-center  w-[26rem]'
            >
              {images.map((images, index) => (
                <div key={index}>
                  <button
                    className={`relative h-22 w-22 overflow-hidden rounded-xl active:ring-2 
                   ${
                     selectedImg === images
                       ? "ring-2 ring-orange transition delay-75 ease-linear "
                       : ""
                   } focus:ring-orange`}
                    onClick={() => setSelectedImg(images)}
                  >
                    <div
                      className={`absolute h-full w-full hover:bg-white opacity-50  ${
                        selectedImg === images ? " opacity-50 bg-white" : ""
                      }`}
                    ></div>
                    <img className={`h-full w-full `} src={images} alt='' />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
