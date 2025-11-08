import React from "react";
import { useLoaderData, useParams } from "react-router";
import download from "../../assets/icon-downloads.png";

import avgrating from "../../assets/icon-ratings.png";

import review from "../../assets/icon-review.png";

import {
  BarChart,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";

const Appdetails = () => {
  const { id } = useParams();
  const parseid = parseInt(id);
  const datafromdetails = useLoaderData();

  const getdatamatchwithid = datafromdetails.find((d) => d.id === parseid);
  const {
    title,
    companyName,
    image,
    description,
    downloads,
    reviews,
    ratingAvg,
    ratings,
  } = getdatamatchwithid;

  const chartData = ratings.map((data) => {
    return {
      name: data.name,
      count: data.count,
    };
  });

  console.log(chartData);

  return (
    <div className="  p-3">
      <div className="appdetail  grid grid-cols-[30%_40%] gap-3 ">
        <div className="p-2 left">
          <img className="rounded-2xl h-[200px] w-full" src={image} alt="" />
        </div>
        <div className="flex flex-col  right  p-2  ">
          <div className="up">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>
              Developed by{" "}
              <span className="text-purple-600">p{companyName}</span>
              <hr className=" border-gray-400  my-2" />
            </p>
          </div>

          <div className="down flex justify-between gap-3 ">
            <div className="">
              <span>
                <img className="h-[20px]" src={download} alt="" />
              </span>
              <p className="text-gray-500 ">Downloads here </p>
              <p className="text-2xl font-bold ">{downloads}</p>
            </div>
            <div>
              <span>
                <img className="h-[20px]" src={avgrating} alt="" />
              </span>
              <p className="text-gray-500">Average Ratings</p>
              <p className="text-2xl font-bold">{ratingAvg}</p>
            </div>
            <div>
              <span>
                <img className="h-[20px]" src={review} alt="" />
              </span>
              <p className="text-gray-500">Total Reviews</p>
              <p className="text-2xl font-bold">{reviews}</p>
            </div>
          </div>
          <button className="text-white bg-blue-400 rounded  font-bold btn">
            Install
          </button>
        </div>
      </div>

      <div className="chart">
        <hr className="w-full  border-gray-400 my-2 " />
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
          layout="vertical"
          width={500}
          height={300}
          data={chartData}
          margin={{ top: 20, right: 30, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />

          <Bar dataKey="count" fill="#FFA500" name="Rating Count" />
        </BarChart>

    </ResponsiveContainer>
        
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
