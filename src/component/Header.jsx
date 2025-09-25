import { useState } from "react";
import { NavbarMenu } from "../../mockData/data";
import logo from "../assets/logo.svg";
import iconMenu from "../assets/icon-menu.svg";
import iconClose from "../assets/icon-close.svg";
import iconCart from "../assets/icon-cart.svg";
import imgAvatar from "../assets/image-avatar.png";

import CartDetail from "./CartDetail";

function Header({ cartQuantity, products }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <nav className="pb-8 border-b border-[#E4E9F2] ">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden mr-4 mt-1"
          >
            <img src={iconMenu} alt="Icon Menu" />
          </button>
          <img src={logo} alt="Logo" className=" object-cover" />
          {/* Desktop menu */}
          <div className="hidden lg:block ml-14">
            <ul className="flex items-center gap-8 text-[#69707D] text-preset-3">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id} className="group relative">
                    <a href={item.link} className="group-hover:text-[#1D2026]">
                      {item.title}
                    </a>
                    <span className="absolute left-0 -bottom-8 h-1 group-hover:w-full bg-[#FF7E1B] transition-translate duration-1000"></span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* User Container */}
        <div className="flex items-center gap-12  ">
          {/* Shopping Cart */}
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="cursor-pointer relative"
          >
            <svg
              width="22"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#69707D] hover:fill-[#1D2026]"
            >
              <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
            </svg>
            {/* Cart item count */}
            <div
              className={`${
                cartQuantity > 0 ? "" : "hidden"
              } rounded-full w-5 h-3 bg-[#FF7E1B] flex items-center justify-center text-white font-bold text-[10px] px-3 py-2
            absolute -top-2.5 left-3`}
            >
              {cartQuantity}
            </div>
          </button>
          {/* Shopping Cart Detail */}
          {isCartOpen && (
            <div
              className="absolute z-10 transform md:translate-y-2/3 md:-translate-x-1/2 -translate-x-3/4 translate-y-3/4
            bg-white shadow-xl w-[360px] h-[256px] rounded-lg py-6 "
            >
              <div className="pb-6 border-b border-[#E4E9F2] text-[#1D2026] text-preset-3-bold px-4">
                Cart
              </div>
              {/* Cart Container */}
              <div className="flex items-center justify-center h-full w-full text-[#69707D] text-preset-3-bold">
                {cartQuantity > 0 ? (
                  <CartDetail cartQuantity={cartQuantity} products={products} />
                ) : (
                  "Your cart is empty."
                )}
              </div>
            </div>
          )}
          {/* Profile */}
          <img
            src={imgAvatar}
            alt="Image Avatar"
            className=" w-6 md:w-12 rounded-full hover:border-2 hover:border-[#FF7E1B]"
          />
        </div>
      </div>

      {/* Overlay and Mobile Menu */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-[#979797] bg-opacity-20 z-10"></div>
          <div className="fixed z-20 top-0 left-0 h-screen md:w-2/5 w-2/3 bg-white md:px-20 md:py-12 p-6">
            <div className="flex flex-col gap-14">
              {/* Close menu */}
              <button onClick={() => setIsOpen(false)}>
                <img
                  src={iconClose}
                  alt="Icone-Close"
                  className=" object-cover"
                />
              </button>
              <ul className=" space-y-6 text-[#1D2026] text-preset-3-mobile">
                {NavbarMenu.map((item) => {
                  return (
                    <li key={item.id} className="group relative group">
                      <a href={item.link} className=" hover:text-[#FF7E1B]">
                        {item.title}
                      </a>
                      <span className="absolute left-0 -bottom-8 h-1 group-hover:w-full bg-[#FF7E1B] transition-translate duration-1000"></span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Header;
