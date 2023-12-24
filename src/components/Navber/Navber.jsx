import React from "react";
import '../Navber/Navber.css'
import Logo from '../../assets/logo.png'
import LogoNew from '../../assets/logoNew.png'
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <div className="navbar bg-[#1C2B35] fixed z-10">
      <div className="container mx-auto">
        <div className="flex-1">
          <NavLink to='/' className="text-white text-xl">
            <img className="ml-28 w-36" src={LogoNew} alt="" />
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="flex-row mr-28">
              <NavLink to="/shop" className="text-white">Shop</NavLink>
              <NavLink to="/review" className="text-white">Order Review</NavLink>
              <NavLink to="/about" className="text-white">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
