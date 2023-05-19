import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between px-5 py-5 items-center bg-transparent lg:flex nav relative z-10">
      <h1 className="text-xl font-bold pr-5 text-white">
        <Link href="/landingpage">ReBlog</Link>
      </h1>
      <div className="flex items-center">
        <div className="hidden lg:block flex items-center">
          <input
            className="ml-2 p-2 mr-3 text-sm text-gray-900 rounded-lg bg-black border border-purple-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:bg-white focus:outline-none  hidden md:block"
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </div>
        <ul className="flex items-center space-x-6">
          <li className="font-semibold text-white hidden md:block">
            <Link href="/landingpage">Home</Link>
          </li>
          <li className="font-semibold text-white ">
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/login" legacyBehavior>
              <button
                type="button"
                className="text-purple-700 text-white bg-black hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 pt-0.2 text-center mr-2  dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 "
                passhref
              >
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
