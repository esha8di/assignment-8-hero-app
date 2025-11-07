import React from "react";
import Banner from "../Banner/Banner";
import Picture from "../Picture/Picture";
import Rating from "../Rating/Rating";
import Trendingapp from "../Trending/Trendingapp";

const Home = () => {
  return (
    <div>
      <div className="md:max-w-[70%] mx-auto ">
        <Banner></Banner>
        <Picture></Picture>
      </div>

      
        <Rating></Rating>
      

      <div className="md:max-w-[90%] border mx-auto">
        <Trendingapp></Trendingapp>
      </div>
    </div>
  );
};

export default Home;
