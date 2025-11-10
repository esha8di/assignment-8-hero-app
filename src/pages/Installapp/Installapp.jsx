import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getdata, remove } from "../Localstorage/Localstorage";

import download from "../../assets/icon-downloads.png";

import avgrating from "../../assets/icon-ratings.png";

import review from "../../assets/icon-review.png";
import { toast, ToastContainer } from "react-toastify";

const Installapp = () => {
  const datafromdetails = useLoaderData();
  const [list, setList] = useState([]);

  const [state,setState]=useState('')

  const handlesort=(type)=>{
   setState(type)

   console.log(type)

   if(type==='HtoL'){
    const sortHtoL=[...list].sort((a,b)=>a.ratingAvg-b.ratingAvg)
    setList(sortHtoL)
    console.log(list)
   }
   if(type==='LtoH')
   {
     const sortHtoL=[...list].sort((a,b)=>b.ratingAvg-a.ratingAvg)
    setList(sortHtoL)
   }

  }

  
  useEffect(() => {
    const getdatafromjs = getdata();
    const installdata = datafromdetails.filter((data) =>
      getdatafromjs.includes(String(data.id))
    );
    // console.log(installdata);
    setList(installdata);

    console.log(list);
  }, [datafromdetails]);

  const handleremove = (id) => {
    remove(id);
    setList((prev) => prev.filter((app) => app.id !== id));
    toast("Uninstalled");
  };

  return (
    <div className="my-[50px] w-[80%] mx-auto flex flex-col justify-center items-center ">
      <div className="text-center mb-[60px] w-full  ">
        <ToastContainer></ToastContainer>
        <h2 className="text-xl font-bold">Installed Apps</h2>
        <p className="text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="down w-full flex justify-between items-center p-2 ">
        <p className="text-xl font-bold">({list.length}) Apps Found</p>
        <details className="dropdown">
          <summary className="btn m-1">sort by {state? state:""}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={()=>handlesort("HtoL")}>
              <a>High to Low</a>
            </li>
            <li onClick={()=>handlesort("LtoH")}>
              <a>Low to High</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="w-full  rounded-2x ">
        {list.map((data) => (
          <div>
            {/*  */}
            <div className="appdetail  grid grid-cols-[10%_80%] gap-3 mb-3 bg-white rounded-2xl">
              <div className="p-2 left">
                <img
                  className="rounded-2xl h-[50px] w-full"
                  src={data.image}
                  alt="not found"
                />
              </div>

              <div className="flex right  p-2 justify-between  ">
                <div className="up">
                  <h2 className="text-xl font-bold">{data.title}</h2>
                  <div className="down flex justify-between gap-3 ">
                    <div className="flex justify-center items-center">
                      <span>
                        <img className="h-[15px]" src={download} alt="" />
                      </span>

                      <p className=" ">{data.downloads}</p>
                    </div>
                    <div className="flex justify-center items-center g-1">
                      <span>
                        <img className="h-[15px]" src={avgrating} alt="" />
                      </span>

                      <p className=" ">{data.ratingAvg}</p>
                    </div>
                    <div className="flex justify-center items-center">
                      <span>
                        <img className="h-[20px]" src={review} alt="" />
                      </span>

                      <p className="">{data.reviews}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    className="btn bg-purple-600 text-white"
                    onClick={() => handleremove(data.id)}
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installapp;
