import Link from "next/link";
import React from "react";

const Recent = () => {
  const cardData = [
    {
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1571750007475-09cc42b58613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      date: "04",
      month: "Aug",
      desc: "Autem sunt tempora mollitia magnam non voluptates",
    },
    {
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1485527172732-c00ba1bf8929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      date: "01",
      month: "Aug",
      desc: "Inventore reiciendis aliquam excepturi",
    },
    {
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1567769541495-338ee7203e3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      date: "28",
      month: "Jul",
      desc: "Officiis mollitia dignissimos commodi optio vero animi",
    },
    {
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1614630536429-74e43f302c31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      date: "19",
      month: "Jul",
      desc: "Doloribus sit illo necessitatibus architecto exercitationem enim",
    },
  ];
  return (
    <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-800 dark:text-gray-100 lg:mb-20 lg:pb-15 lg:mt-20">
      <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px] text-white">
        <span className="font-semibold text-lg text-primary mb-2 block">
          Our Blogs
        </span>
        <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
          Related Blogs
        </h2>
        <p className="text-base text-body-color">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2 ">
        {cardData.map((card, index) => {
          return (
            <Link href={`/blogs/${card.category}/blog`} legacyBehavior>
              <div
                className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500 hover:opacity-75 cursor-pointer custom-hover-effect"
                style={{
                  backgroundImage: `url(${card.image})`,
                }}
                passhref = {true}
              >
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mb-5 p-3 bg-black bg-opacity-40 text-white">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
                  >
                    {card.category}
                  </a>
                  <div className="flex flex-col justify-start text-center dark:text-gray-100">
                    <span className="text-3xl font-semibold leading-none tracking-wide">
                      {card.date}
                    </span>
                    <span className="leading-none uppercase">{card.month}</span>
                  </div>
                </div>
                <h2 className="z-10 p-5 bg-black bg-opacity-60 text-white">
                  {card.desc}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Recent;
