


import React from 'react';
import logo from '../assets/6180e1bd584667cb460c6186_apxor-logo-white-4x.png';
import { FaAngleDown } from 'react-icons/fa';

const arr = ['Solutions', 'Success Stories', 'Resources', 'Pricing', 'Company'];

const Navbar = () => {
  return (
    <div className="sticky z-10 left-0 top-0 border-b-2 border-gray-600 grid gap-4 grid-cols-12 right-0 h-[110px] p-4 bg-[#16202f] text-white">
      {/* Logo */}
      <div className="col-span-3 flex items-center">
        <img src={logo} alt="logo" className="h-8 w-24" />
      </div>

      {/* Menu Items */}
      <div className="flex justify-center items-center gap-8 col-span-6">
        {arr.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="text-base font-medium">{item}</div>
            {item !== 'Success Stories' && item !== 'Pricing' ? (
              <FaAngleDown className="text-sm" />
            ) : null}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 col-span-3 items-center justify-center">
        <div>
          <button className="bg-[#039be5] border-2 border-blue-800 py-2 px-6 rounded-lg font-bold text-sm">
            Book a Demo
          </button>
        </div>
        <div className="py-2 px-6 border-[#039be5] border-2 rounded-lg text-sm font-bold">
          Login
        </div>
      </div>
    </div>
  );
};

export default Navbar;
