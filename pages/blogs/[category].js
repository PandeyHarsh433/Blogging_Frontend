import Background from "@/components/Background";
import BlogList from "@/components/BlogList";
import Card from "@/components/Card";
import CatBlog from "@/components/CatBlog";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const category = () => {
  return (
    <div>
      <Background />
      <Navbar />
      <BlogList/>
      <Footer/>
    </div>
  );
};

export default category;
