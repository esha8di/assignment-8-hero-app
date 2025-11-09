import React, { useEffect, useState } from 'react';
import { useLoaderData} from "react-router";
import { getdata, remove} from "../Localstorage/Localstorage";

const Installapp = () => {
    const datafromdetails = useLoaderData();
    const [list,setList]=useState([])
    
    useEffect(()=>{
        const getdatafromjs=getdata();
    const installdata=datafromdetails.filter(data=>getdatafromjs.includes(String(data.id)))
    // console.log(installdata);
    setList(installdata)

    console.log(list)

    },[datafromdetails])
        

   
    

    const handleremove=(id)=>{
        remove(id);
        setList(prev => prev.filter(app => app.id !== id)); 
    }
     

    return (
        
        <div className="my-[50px] flex flex-col justify-center items-center ">
            
                <div className="text-center mb-[60px] w-full  ">
          <h2 className="text-xl font-bold">Trending Apps</h2>
          <p className="text-gray-400">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
           
            <div className="down w-full flex justify-between items-center p-2 ">
          <p className="text-xl font-bold">({list.length}) Apps Found</p>
          
          

         
         
        </div>
            <div>
                {
                list.map(data=><div>
                    <button className='btn' onClick={()=>handleremove(data.id)}>
                          { data.id}
                    </button>
                 

                </div>)
            }

            </div>
            
        </div>
    );
};

export default Installapp;