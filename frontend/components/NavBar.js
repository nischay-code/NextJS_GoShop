import React from "react";
import Link from "next/Link";

export const NavBar = ({ cart }) => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img
                className="w-8"
                src="https://th.bing.com/th/id/R.048be60602dd632ea846f75a64cd522f?rik=zr9357GmpfJI8Q&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_456276.png&ehk=goQRJpEQqbot%2faaFi6mTtmGLgqRN0%2bOsvsDp%2bVi6GX0%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
              <span className="ml-3 text-xl">MyShop</span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">Home</a>
            </Link>
            <Link href="/about">
              <a className="mr-5 hover:text-gray-900">About</a>
            </Link>
            <Link href="/products">
              <a className="mr-5 hover:text-gray-900">Products</a>
            </Link>
            <Link href="/contact">
              <a className="mr-5 hover:text-gray-900">Contact Us</a>
            </Link>
            <Link href="/checkout">
              <a className="mr-5 hover:text-gray-900">Cart({cart.length})</a>
            </Link>
          </nav>
          <button className="my-2 text-white bg-black border-0 py-1 md:py-2 px-2 md: focus:outline-none hover:bg-purple-600 rounded text-md">
            Login
          </button>
        </div>
      </header>
    </div>
  );
};
