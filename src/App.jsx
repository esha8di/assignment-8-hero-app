import { useLoaderData } from "react-router";
import "./App.css";
import Topapp from "./pages/Topapp/Topapp";
import { useState } from "react";
import Errorapp from "./pages/Errorapp/Errorapp";

function App() {
  const datas = useLoaderData();

  const [app,setApp]=useState("")
  // console.log(datas)

  const checkappmatch=(e)=>{
    e.preventDefault();

    const searchapp=e.target.value;
    setApp(searchapp)

    
    // console.log(app)
  }

  const storematchdata=datas.filter(data=>data.title.includes(app));
  console.log(storematchdata)

  return (
    <>
      <div className="my-[50px] flex flex-col justify-center items-center ">
        <div className="text-center mb-[60px] w-full  ">
          <h2 className="text-xl font-bold">Trending Apps</h2>
          <p className="text-gray-400">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="down w-full flex justify-between items-center p-2 ">
          <p className="text-xl font-bold">({storematchdata.length}) Apps Found</p>
          <label className="input bg-gray-100">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input  type="search" onChange={checkappmatch} className="grow" placeholder="Search Apps" />
          </label>
          

          {/* <div className=" mb-2 p-2">
          {storematchdata.map((app) => (
            <Topapp app={app}></Topapp>
          ))}
        </div> */}
         
        </div>

        {storematchdata && storematchdata.length > 0 ? (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-2 p-2">
    {storematchdata.map((app) => (
      <Topapp key={app.id} app={app} />
    ))}
  </div>
) : (
  <Errorapp />
)}

      </div>
    </>
  );
}

export default App;
