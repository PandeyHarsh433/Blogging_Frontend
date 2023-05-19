import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="text-white hero">
      <div className="mx-auto max-w-screen-xl px-4 py-10 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl tag">
            INNOVATIVE DUCK
            <span className="md:block pb-2 "> Blogging In </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Whether you're looking for inspiration, knowledge, or entertainment,
            you'll find it here.I explore the many facts of life through the
            power of words.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ScrollLink
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto cursor-pointer"
              to="categories"
              smooth={true}
              duration={500}
            >
              Explore more
            </ScrollLink>
            <Link href="/blogs" legacyBehavior>
              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                data-aos="fade-left"
                passhref
              >
                My Blogs
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
