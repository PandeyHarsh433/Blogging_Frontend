import React from "react";
import Link from "next/link";

const CatBlog = () => {
  const cardsData = [
    {
      category: "education",
      image: "https://source.unsplash.com/200x200/?fashion?1",
      title: "Te nulla oportere reprimique his dolorum",
      date: "June 1, 2020",
      views: "2.1K views",
    },
    {
      category: "technology",
      image: "https://source.unsplash.com/200x200/?fashion?2",
      title: "Te nulla oportere reprimique his dolorum",
      date: "June 2, 2020",
      views: "2.2K views",
    },
    {
      category: "food",
      image: "https://source.unsplash.com/200x200/?fashion?3",
      title: "Te nulla oportere reprimique his dolorum",
      date: "June 3, 2020",
      views: "2.3K views",
    },
    {
      category: "travel",
      image: "https://source.unsplash.com/200x200/?fashion?4",
      title: "Te nulla oportere reprimique his dolorum",
      date: "June 4, 2020",
      views: "2.4K views",
    },
  ];
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 text-white cat-blogs">
      <div className="mx-auto py-[10%] pb-[15%] space-y-8" id="blogs">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold pb-2">Blogs</h2>
          <p className="font-serif text-lg pb-10 dark:text-gray-400">
            Popular blogs about technologies advencement
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {cardsData.map((card, index) => {
            return (
              <Link
                href={`/blogs/${card.category}/blog1`}
                legacyBehavior
                key={index}
              >
                <article
                  className="flex flex-col dark:bg-gray-900 hover:opacity-75 cursor-pointer custom-hover-effect py-10 border p-5 lg:pt-20 rounded-md bg-black bg-opacity-50"
                  passhref={true}
                >
                  <a aria-label="Te nulla oportere reprimique his dolorum">
                    <img
                      alt=""
                      className="object-cover w-full h-52 dark:bg-gray-500"
                      src={card.image}
                    />
                  </a>
                  <div className="flex flex-col flex-1 p-6">
                    <a
                      rel="noopener noreferrer"
                      aria-label="Te nulla oportere reprimique his dolorum"
                    ></a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                    >
                      {card.category}
                    </a>
                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                      {card.title}
                    </h3>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                      <span>{card.date}</span>
                      <span>{card.views}</span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CatBlog;
