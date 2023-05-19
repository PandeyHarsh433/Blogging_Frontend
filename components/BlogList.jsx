import React from "react";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import CatBlog from "./CatBlog";

const BlogList = () => {
  return (
    <section className="scrollable-container">
      <div className="w-screen relative overflow-hidden bg-no-repeat bg-cover lg:-mt-20 carousel">
        <div
          className="absolute top-0 right-0 bottom-0 left-0  overflow-hidden carousel-lg"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                Explore the latest Food Blogs <br />
                <span>You will enjoy reading</span>
              </h1>
              <ScrollLink to="blogs" smooth={true} duration={500}>
                <button
                  type="button"
                  className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black  focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor-pointer"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Go to Blogs
                </button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
      <CatBlog />
    </section>
  );
};

export default BlogList;
