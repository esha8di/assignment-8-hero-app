import React, { Suspense } from "react";
import Banner from "../Banner/Banner";
import Picture from "../Picture/Picture";
import Rating from "../Rating/Rating";
import Trendingapp from "../Trending/Trendingapp";
import { useLoaderData } from "react-router";


const Home = () => {
  const topapps=useLoaderData()
  return (
    <div >
      <div className="md:max-w-[70%] mx-auto ">
        <Banner></Banner>
        <Picture></Picture>
      </div>

      
        <Rating></Rating>
      

      <div className="md:max-w-[90%]  mx-auto">
        <Suspense fallback={<p>loading.........</p>}>
          <Trendingapp topapps={topapps}></Trendingapp>
        </Suspense>
        
      </div>
    </div>
  );
};

export default Home;
