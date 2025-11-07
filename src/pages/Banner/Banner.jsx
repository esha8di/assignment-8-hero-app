import React from 'react';
import googleplaystore from '../../assets/Group.svg'

import appstorepic from '../../assets/fi_5977575.svg'

const Banner = () => {
    return (
        <div className='text-center my-[40px]'>
           <h2 className='text-5xl font-bold mb-4'>We Build<br />
           <span className='text-purple-600'>Productive </span> Apps</h2>
           <p className='text-gray-400'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

           {/* two buttons */}

           <div className=' mt-5'>
            <button className='btn mr-4'>
                 <span><img src={googleplaystore} alt="" /></span>
                <a href="https://play.google.com/store/apps?hl=en" target='_blank'>Google Store</a></button>
            <button className='btn ml-4'>
                 <span><img src={appstorepic} alt="" /></span>
                <a href="https://www.apple.com/app-store/" target='_blank'>
                App Store</a></button>
           </div>
        </div>
    );
};

export default Banner;