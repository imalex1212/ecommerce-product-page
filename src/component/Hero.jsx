import React, { useState } from "react";
import product1 from "../assets/image-product-1.jpg";
import product2 from "../assets/image-product-2.jpg";
import product3 from "../assets/image-product-3.jpg";
import product4 from "../assets/image-product-4.jpg";

import product1Thumb from "../assets/image-product-1-thumbnail.jpg";
import product2Thumb from "../assets/image-product-2-thumbnail.jpg";
import product3Thumb from "../assets/image-product-3-thumbnail.jpg";
import product4Thumb from "../assets/image-product-4-thumbnail.jpg";

import cart from "../assets/icon-cart.svg";
import { use } from "react";

function Hero({ products, quantity, setQuantity, setCartQuantity }) {
  const thumbProducts = [
    product1Thumb,
    product2Thumb,
    product3Thumb,
    product4Thumb,
  ];

  const [isLightBox, setIsLightBox] = useState(false);

  const [current, setCurrent] = useState(0);

  function setPrevious() {
    setCurrent((pre) => (pre === 0 ? products.length - 1 : pre - 1));
  }

  function setNext() {
    setCurrent((pre) => (pre === products.length - 1 ? 0 : pre + 1));
  }

  // Quantity
  function increaseBtn() {
    setQuantity((pre) => pre + 1);
  }

  function decreaseBtn() {
    setQuantity((pre) => (pre > 1 ? pre - 1 : pre)); // prevent below 1
  }

  return (
    <section className="container md:py-24 lg:px-22">
      <div className="grid lg:grid-cols-2 lg:gap-32 md:gap-12 gap-6">
        {/* Product Img Container */}
        {/* Desktop */}
        <div className="hidden lg:grid gap-8">
          <button onClick={() => setIsLightBox(true)}>
            <img
              src={products[current]}
              alt={`Product ${current + 1}`}
              className="rounded-lg"
            />
          </button>
          <div className="flex justify-between">
            {thumbProducts.map((product, index) => {
              return (
                <button key={index} onClick={() => setCurrent(index)}>
                  <img
                    src={product}
                    alt={`Product ${index + 1}`}
                    className={`rounded-lg hover:border-2 hover:border-[#FF7E1B] h-full w-full max-w-22 mx-h-22 ${
                      current === index
                        ? "border-2 border-[#FF7E1B]"
                        : "border-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* LightBox Container */}
        {isLightBox && (
          <>
            <div className="fixed inset-0 z-10 backdrop-brightness-50"></div>
            <div className="fixed inset-0 flex items-center justify-center z-20">
              <div className="w-full max-w-[550px] grid gap-6 ">
                {/* Main Product */}
                <button
                  onClick={() => setIsLightBox(false)}
                  className="justify-items-end"
                >
                  <svg
                    width="14"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-[#D8D8D8] hover:fill-[#FF7E1B] cursor-pointer"
                  >
                    <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
                  </svg>
                </button>

                <div className="grid gap-10 relative">
                  {/* Main Product */}
                  <button>
                    <img
                      src={products[current]}
                      alt={`Product ${current + 1}`}
                      className="rounded-lg w-137 h-137"
                    />
                  </button>
                  {/* Left (Previous) Button */}
                  <button
                    onClick={setPrevious}
                    className="rounded-full bg-white w-14 h-14 flex items-center justify-center group 
                  absolute top-1/3 -translate-x-1/2 translate-y-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-5 text-gray-900 group-hover:text-[#FF7E1B] "
                      viewBox="0 0 12 18"
                      fill="none"
                    >
                      <path
                        d="M11 1 3 9l8 8"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>
                  {/* Right (Next) Button */}
                  <button
                    onClick={setNext}
                    className="rounded-full bg-white w-14 h-14 flex items-center justify-center group 
                  absolute right-0 top-1/3 translate-x-1/2 translate-y-6"
                  >
                    <svg
                      className="w-3 h-5 text-gray-900 group-hover:text-[#FF7E1B]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m2 1 8 8-8 8"
                        stroke="currentColor"
                        stroke-width="3"
                        fill="none"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className="flex justify-around">
                    {thumbProducts.map((product, index) => {
                      return (
                        <button key={index} onClick={() => setCurrent(index)}>
                          <img
                            src={product}
                            alt={`Product + ${index + 1}`}
                            className={`w-22 h-22 rounded-lg ${
                              index === current
                                ? "border-2 border-[#FF7E1B]"
                                : "border-transparent"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Mobile */}
        <div className="lg:hidden w-full h-full md:max-h-[290px] max-h-[300px] relative">
          {/* Main Product */}
          <img
            src={products[current]}
            alt={`Product ${current + 1}`}
            className="w-full h-full object-cover md:rounded-lg rounded-none"
          />
          {/* Left (Previous) Button */}
          <button
            onClick={setPrevious}
            className="absolute bg-white h-10 w-10 rounded-full top-2/5 left-3 translate-y-4 flex items-center justify-center group"
          >
            <svg
              className="w-3 h-5 text-gray-900 group-hover:text-[#FF7E1B]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1 3 9l8 8"
                stroke="currentColor"
                stroke-width="3"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </button>
          {/* Right (Next) Button */}
          <button
            onClick={setNext}
            className="absolute bg-white h-10 w-10 rounded-full top-2/5 right-3 translate-y-4 flex items-center justify-center group"
          >
            <svg
              className="w-3 h-5 text-gray-900 group-hover:text-[#FF7E1B]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m2 1 8 8-8 8"
                stroke="currentColor"
                stroke-width="3"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Product Detail Container */}
        <div className="my-auto px-6 md:px-0">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="uppercase text-gray-500 font-bold text-[13px]">
                sneaker company
              </h2>
              <h1 className="text-gray-950 text-preset-1">
                Fall Limited Edition Sneakers
              </h1>
            </div>
            <p className="text-gray-500 leading-[26px] text-[16px] font-normal">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            {/* Price Container Desktop*/}
            <div className="flex md:flex-col ">
              <div className="flex gap-4 items-center md:mb-2">
                {/* current Price */}
                <span className="text-gray-950 text-preset-2">$125.00</span>
                <span className="text-white bg-gray-950 text-center w-[51px] h-[27px] rounded-lg font-bold text-[16px] leading-[26px] ">
                  50%
                </span>
              </div>
              <s className="font-bold text-[16px] leading-[26px] text-gray-500 ml-auto md:ml-0">
                $250.00
              </s>
            </div>

            {/* Action container */}
            <div className="flex flex-col md:flex-row lg:gap-4 md:gap-2 gap-4">
              {/* Quantity Selector */}
              <div className="md:w-1/2 w-full px-2 py-4 flex items-center justify-between bg-gray-100 rounded-xl">
                {/* Decrease button */}
                <button
                  className="cursor-pointer"
                  onClick={decreaseBtn}
                  type="button"
                  aria-label="Decrease quantity"
                >
                  <svg
                    className="w-3 h-1 text-[#FF7E1B] hover:text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>

                {/* Quantity input */}
                <input
                  type="number"
                  value={quantity}
                  min="1"
                  readOnly
                  aria-label="Product quantity"
                  className="w-12 text-center font-bold text-[16px] leading-[26px] outline-none bg-transparent text-gray-900"
                />

                {/* Increase button */}
                <button
                  className="cursor-pointer"
                  onClick={increaseBtn}
                  type="button"
                  aria-label="Increase quantity"
                >
                  <svg
                    className="w-3 h-3 text-[#FF7E1B] hover:text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>

              {/* Add to Cart Btn */}
              <button
                onClick={() => setCartQuantity(quantity)}
                className="w-full flex items-center justify-center gap-4 rounded-xl bg-[#FF7E1B] py-4 px-6 font-bold text-[16px] leading-[26px] text-gray-950 hover:bg-[#FFAB6A] shadow-lg shadow-[0_50px_50px_-20px_rgba(255,126,27,0.50)]"
              >
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="#000000ff"
                    fill-rule="nonzero"
                  />
                </svg>
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
