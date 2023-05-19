import React, { useEffect } from "react";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";

const Explore = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mx-auto block " style={{ width: "80%" }} id="categories">
      <div className="text-center hero-title">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl tag pb-10">
          Categories
        </h1>
        <hr
          style={{
            borderColor: "white",
            width: "100%",
            marginBottom: "4rem",
            textAlign: "center",
          }}
        />
      </div>
      <div className="clearfix cards-container">
        <div className="float-left card1" data-aos="fade-right">
          <Card
            title="Education"
            data="Explore all the blogs that are related to education category"
            image="https://images.unsplash.com/photo-1558021211-6d1403321394?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80"
            category="education"
          />
        </div>
        <div className="float-right card2" data-aos="fade-left">
          <Card
            title="Technology"
            data="Explore all the blogs that are related to Technologies category"
            image="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            category="education"
          />
        </div>
        <div className="float-left card1" data-aos="fade-right">
          <Card
            title="Travel"
            data="Explore all the blogs about the Travelling that I have done"
            image="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            category="education"
          />
        </div>
        <div className="float-right card2" data-aos="fade-left">
          <Card
            title="Personal"
            data="Explore all my personal blogs that could be boring"
            image="https://images.unsplash.com/photo-1604579652705-152db6e2d68c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
            category="education"
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
