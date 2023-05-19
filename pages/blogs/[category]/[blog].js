import React from "react";
import Background from "@/components/Background";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Recent from "@/components/Recent";

const blog = () => {
  return (
    <div>
      <Background />
      <Navbar />
      <Blog />
      <Footer />
    </div>
  );
};

export default blog;
