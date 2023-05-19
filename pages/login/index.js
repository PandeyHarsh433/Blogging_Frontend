import Background from "@/components/Background";
import LoginForm from "@/components/Login";
import Navbar from "@/components/Navbar";
import React from "react";

const index = () => {
  return (
    <div>
      <Background />
      <Navbar />
      <LoginForm />
    </div>
  );
};

export default index;
