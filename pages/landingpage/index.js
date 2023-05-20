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
        <div>
          <Navbar />
          <Hero />
          <Explore />
        </div>
        <hr className="about-hr" style={{ border: "0.2px solid white" }} />
        <div className="about-section">
          <Aboutme />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default index;
