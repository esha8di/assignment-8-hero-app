import React from "react";
import { useLoaderData, useParams } from "react-router";
import download from '../../assets/icon-downloads.png'

import avgrating from '../../assets/icon-ratings.png'

import review from '../../assets/icon-review.png'

const Appdetails = () => {
  const { id } = useParams();
  const parseid = parseInt(id);
  const datafromdetails = useLoaderData();

  const getdatamatchwithid = datafromdetails.find((d) => d.id === parseid);
  const { title, companyName, image, description ,downloads, reviews,ratingAvg} = getdatamatchwithid;

  return (
    <div className="grid md:grid-rows-[40%_40%_20%]  p-3">

      <div className="appdetail  flex gap-3">
        <div className="p-2 left">
          <img className=" h-[100%] rounded-2xl" src={image} alt="" />
        </div>
        <div className="flex flex-col justify-around right   ">
          <div className="up">
             <h2 className="text-2xl font-bold">{title}</h2>
          <p>
            Developed by <span className="text-purple-600">p{companyName}</span>
            <hr className=" border-gray-400  my-2" />
          </p>

          </div>

          <div className="down flex justify-around gap-3 ">
            <div className="" >
              <span><img className="h-[20px]" src={download} alt="" /></span>
              <p className="text-gray-500 ">Downloads here </p>
              <p className="text-2xl font-bold ">{downloads}</p>
            </div>
            <div>
              <span><img className="h-[20px]" src={avgrating} alt="" /></span>
              <p className="text-gray-500">Average Ratings</p>
              <p className="text-2xl font-bold">{ratingAvg}</p>
            </div>
            <div>
              <span><img className="h-[20px]" src={review} alt="" /></span>
              <p className="text-gray-500">Total Reviews</p>
              <p className="text-2xl font-bold">{reviews}</p>
            </div>

            
            
           

          </div>
          <button className="text-white bg-blue-400 rounded  font-bold btn">Install Now(291 MB)</button>

          
         
        </div>
        
      </div>



      <div className="chart">
        <hr className="w-full  border-gray-400 my-2 " />
      </div>


      <div className="description ">
         <hr className=" border-gray-400 my-2" />
        <h1 className="text-xl font-bold">Desciption</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Appdetails;
