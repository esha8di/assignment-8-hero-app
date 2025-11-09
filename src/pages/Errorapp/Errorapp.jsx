import React from 'react';
import apperror from '../../assets/App-Error.png'
import { Link } from 'react-router';

const Errorapp = () => {
    return (
        <div className='text-center flex flex-col justify-center items-center m-10 '>
          <img  src={apperror} alt="" /> 
          <h1 className='text-2xl font-bold my-3'>OPPS!! APP NOT FOUND</h1>
          <p className='text-gray-400 m-3'>The App you are requesting is not found on our system.  please try another apps</p>
          <button className='btn text-white bg-purple-600'>
            <Link to='/'> Go Back!</Link>
           </button>
        </div>
    );
};

export default Errorapp;