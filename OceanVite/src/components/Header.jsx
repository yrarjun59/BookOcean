import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCartShopping,
  faHeart,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="my-[20px] h-[80px] flex justify-center mx-[100px]">
      {/* logo */}
      <a href="#">
        <img
          className="w-[200px] h-[30px] cursor-pointer"
          src="./images/bookocean logo.svg"
          alt="logo-image"
        />
      </a>
      
      {/* search bar */}
      <input
        type="text"
        placeholder="Search What You love to read........"
        className="w-[400px] h-[40px] ml-[218px] border-cyan-400 rounded-[10px] outline-myGreen outline-2 outline-none value='books' "
      />

      {/* cart */}
      <div className="flex justify-center">
        <a className="relative" href="#">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-myGreen w-[30px] h-[30px] ml-[60px]"
          />

          <span className=" absolute bg-[#FF7A5C] text-[#ffffff] font-bold rounded-full w-5 h-5 text-xs text-center right-[3px] -top-2">
            12
          </span>
        </a>
        {/* wishlists */}
        <a href="#" className="relative">
          <FontAwesomeIcon
            icon={faHeart}
            className="mx-[30px] w-[30px] h-[30px] text-[#D90077] cursor-pointer"
          />
          <span className="absolute bg-[#FF7A5C] text-[#ffffff] font-bold text-center text-xs  rounded-full w-5 h-5 right-[34px] -top-2">
            14
          </span>
        </a>
      </div>

      {/* login-signup */}
      <div className="flex mx-[20px]">
        <a href="dd" className="flex justify-center">
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="w-[30px] h-[30px] text-myGreen"
          />
          <p className="uppercase mx-3 mt-1 text-center text-[#75759D]font-bold">
            login/signup
          </p>
        </a>
      </div>
    </div>
  );
}

export default Header;
