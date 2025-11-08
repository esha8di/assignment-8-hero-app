import React from 'react';

import Topapp from '../Topapp/Topapp';
import { Link } from 'react-router';

const Trendingapp = ({topapps}) => {
   
 
    // console.log(topapps)
    return (
        <div className='my-[50px] flex flex-col justify-center items-center'>

            <div className='text-center mb-[60px]'>
                <h2 className='text-xl font-bold'>Trending Apps</h2>
                <p className='text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
            </div>
           

           <div  className='grid grid-cols-2 md:grid-cols-4 gap-3 mb-2'>
             {
                topapps.map(app =><Topapp app={app}></Topapp>)
}

           </div>
          
           <button className='btn rounded-2xl bg-purple-600 text-white font-bold text-center'>
            <Link to='/app'>Show All</Link>
            </button>
          
           
           
        </div>
    );
};

export default Trendingapp;