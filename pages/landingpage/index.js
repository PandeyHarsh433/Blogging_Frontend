import Aboutme from "@/components/Aboutme";
import Background from "@/components/Background";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react";

const index = () => {
  return (
    <>
      <Background />
      <div className="landing">
        <Navbar />
        <Hero />
        <Explore />
        <Aboutme />
        <Footer />
      </div>
    </>
  );
};

export default index;
