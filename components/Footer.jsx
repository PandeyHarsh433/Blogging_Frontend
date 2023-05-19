import Link from "next/link";
import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <section className="bg-transparent footer">
      <hr />
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2 text-white">
          <div className="px-5 py-2">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="text-base leading-6 hover:underline cursor-pointer"
            >
              About
            </ScrollLink>
          </div>
          <div className="px-5 py-2">
            <Link href="/blogs" legacyBehavior>
              <a className="text-base leading-6 hover:underline" passhref>
                Blogs
              </a>
            </Link>
          </div>
          <div className="px-5 py-2">
            <ScrollLink
              to="categories"
              smooth={true}
              duration={500}
              className="text-base leading-6 hover:underline cursor-pointer"
            >
              Categories
            </ScrollLink>
          </div>
          <div className="px-5 py-2">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="text-base leading-6 hover:underline cursor-pointer"
            >
              Contact
            </ScrollLink>
          </div>
          <div className="px-5 py-2">
            <Link href="#" legacyBehavior>
              <a className="text-base leading-6 hover:underline" passhref>
                Terms
              </a>
            </Link>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <a
            href="https://www.facebook.com/profile.php?id=100023977083779"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Facebook</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/iharsh144/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Instagram</span>
            <svg
              className="w-8 h-8"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M16.5 2.25h-9C5.008 2.25 3.75 3.508 3.75 5.25v9c0 1.742 1.258 3 3 3h9c1.742 0 3-1.258 3-3v-9c0-1.742-1.258-3-3-3zm1.5 12c0 .828-.672 1.5-1.5 1.5h-9c-.828 0-1.5-.672-1.5-1.5v-9c0-.828.672-1.5 1.5-1.5h9c.828 0 1.5.672 1.5 1.5v9z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 1.5a3 3 0 110 6 3 3 0 010-6z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="M17.25 6.75a.75.75 0 100 1.5.75.75 0 000-1.5z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="https://github.com/PandeyHarsh433"
            target="_blank"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">GitHub</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0a12 12 0 0 0-3.815 23.397c.6.111.818-.258.818-.577v-2.002c-3.338.725-4.042-1.605-4.042-1.605-.546-1.383-1.333-1.748-1.333-1.748-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.811 1.303 3.496.997.109-.776.418-1.303.763-1.603-2.665-.302-5.466-1.325-5.466-5.905 0-1.307.468-2.377 1.236-3.209-.124-.303-.536-1.518.117-3.158 0 0 1-.321 3.3 1.225a11.442 11.442 0 0 1 6.014 0c2.302-1.546 3.302-1.225 3.302-1.225.654 1.64.242 2.855.118 3.158.77.832 1.236 1.902 1.236 3.209 0 4.591-2.802 5.599-5.478 5.896.43.369.817 1.096.817 2.208v3.273c0 .32.217.694.824.576A12 12 0 0 0 12 0z"
              ></path>
            </svg>
          </a>
          <a
            rel="noopener noreferrer"
            href="https://pandey-harsh-c2049f.netlify.app/"
            target="_blank"
            aria-label="Dribble"
            className="text-gray-400 hover:text-gray-500"
          >
             <span className="sr-only">Portfolio</span>
            <svg
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-current"
            >
              <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
