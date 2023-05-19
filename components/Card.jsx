import Link from "next/link";
import React from "react";

function Card(props) {
  return (
    <div className="container block mx-auto">
      <div className="flex flex-wrap">
        <div
          className="w-full px-4 md:w-1/2 xl:w-1/3 "
          style={{ width: "100%" }}
        >
          <div className="mb-10 overflow-hidden rounded-lg bg-white">
            <img
              src={props.image}
              alt="image"
              className="w-full"
              style={{ height: "300px" }}
            />
            <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9 bg-violet-900 text-white">
              <h3>
                <a
                  href="#"
                  className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                >
                  {props.title}
                </a>
              </h3>
              <p className="text-body-color mb-7 text-base leading-relaxed">
                {props.data}
              </p>
              <Link href={`/blogs/${props.category}`} legacyBehavior>
                <a className="text-purple-700 text-white bg-black hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 pt-0.2 text-center mr-2  dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900" passhref>
                  See Blogs
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;