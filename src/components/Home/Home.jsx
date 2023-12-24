import React from "react";
import BoyImage from "../../assets/Boy image.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="hero min-h-screen bg-[#fff]">
      <div className="hero-content flex-col lg:flex-row-reverse mt-40">
        <div className="bg-[#FFE0B3] rounded-lg">
          <img src={BoyImage} className="max-w-sm rounded-lg shadow-2xl man" />
        </div>

        <div className="mr-40">
          <p className="py-6 text-[#F90]">
            Sale up to <span className="text-5xl">70% off💥</span>
          </p>
          <h1 className="text-5xl font-bold text-black">
            New Collection oN Your Choice
          </h1>
          <p className="py-6 text-black">
            Discover all the new arrivals of ready-to-wear collection.
          </p>
          <button className="btn btn-primary bg-[#F90]">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
