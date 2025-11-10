import React from "react";
import dowload from "../../assets/icon-downloads.png"
import iconrating from "../../assets/icon-ratings.png"
import { Link } from "react-router";

const Topapp = ({ app }) => {
  const { id,title,  downloads, image, ratingAvg } = app;
  return (
    
       <Link to={`appdetails/${id}`} className="grid grid-rows-[70%_30%] md:grid-rows-[75%_25%] p-2 bg-white rounded-xl ">
      <div className="">
        <img className="w-[100%] h-[100%] rounded-2xl" src={image} alt="" />
      </div>
      <div className="flex flex-col justify-between">
        <p>
          {title}
        </p>
        <div className="flex justify-between pb-2 ">
            <button className="btn flex text-green-700">
                <span><img className="h-[15px]" src={dowload} alt="" /></span>
                 <p>
            {downloads}</p>

            </button>
            <button className="btn flex text-yellow-600">
                <span><img className="h-[15px]" src={iconrating} alt="" /></span>
                 <p>
            {ratingAvg}</p>
            

            </button>
         
          
        </div>
      </div>
    </Link>
    
   
  );
};

export default Topapp;
