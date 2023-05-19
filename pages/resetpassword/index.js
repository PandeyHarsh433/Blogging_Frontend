import Background from "@/components/Background";
import Footer from "@/components/Footer";
import ForgetPassword from "@/components/ForgetPassword";
import Navbar from "@/components/Navbar";
import React from "react";

const index = () => {
  return (
    <>
      <div>
        <Background />
        <Navbar />
        <div className="forgetPass">
          <ForgetPassword />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default index;
