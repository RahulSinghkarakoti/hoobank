import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import styles from "../style";
import { navLinks } from "../constants";
// import navLinks from '../constants/index'

const Navbar = () => {
  const [toggle,SetToggle]=useState(false);
  return (
    <nav className="w-full flex py-6 justify-between item-center navbar ">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white  ${index==navLinks.length-1?'mr-0':'mr-10'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
<img src={toggle ? close : menu} alt="menulogo"  onClick={()=>SetToggle((prev)=>!prev)} className="w-[28px] h-[28px] cursor-pointer object-contain"/>
<div className={`${toggle?'flex':'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

<ul className="list-none flex flex-col justify-end items-center ">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white  ${index==navLinks.length-1?'mr-0':'mb-10'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

</div>
      </div>
    </nav>
  );
};

export default Navbar;
