import React from 'react';
import { NavLink } from 'react-router';
import { Github } from 'lucide-react';
import { Volleyball } from 'lucide-react';

const link=[
    <div className='lg:flex'>
    <li>
        <NavLink to='/'>Home</NavLink>
    </li>
    <li>
         <NavLink to='/app'>Apps</NavLink>
    </li>
    <li>
         <NavLink>Installation</NavLink>
    </li>
    </div>
   
    

]
   

const Navbar = () => {
    
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-purple-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
       {link}
      </ul>
    </div>
    <a href='/' className="btn btn-ghost text-xl text-purple-600">
        <span><Volleyball /></span>HERO.IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
      
     {link}
    </ul>
  </div>
  <div className="navbar-end">
    <a target='_blank' href='https://github.com/esha8di' className="btn text-white bg-purple-600"><span> <Github /></span>Contribute</a>
  </div>
</div>
    );
};

export default Navbar;