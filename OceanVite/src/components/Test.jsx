import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Test() {
  return (
    <div className="header-container mx-[320px] max-w-screen-xl  h-[80px]">
      <header class="flex items-center">
        <img
          className="w-[200px] h-[30px] my-[25px] cursor-pointer"
          src="./images/bookocean logo.svg"
          alt="logo-image"
        />

        <div className="searchBar ml-[100px] w-[400px]">
          <input
            type="text"
            placeholder="Search what you love to read.............."
            className="w-[400px] h-10 rounded-[10px] border-[#2CD680] border-2 outline-none"
          />
        </div>

        <div className="navComponents  flex align-center w-[180.32px] h-[38.76px] ml-40 my-[25px] border-[#2CD680] ">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="w-7 h-7 text-[#2CD680]"
          />

          <div className="text pl-[10px] text-left">
            <p className="align-center text-[12px]">
              deliver to <span>Arjun</span>
            </p>
            <p className="location font-bold">Aalapot</p>
          </div>
        </div>

        {/* <div className="relative my-[20px]">
          <p className="asbolute rounded-full font-bold text-[20px] bg-yellow-400 text-center text-[#ffffff]">0</p>
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-[#2CD680] w-[25px] h-[25px]"
          />
        </div> */}

        <button class=" relative flex h-[52px] w-[50px] items-center justify-center rounded-md bg-white text-base font-semibold text-body-color shadow-template ">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.33337 4.66666C2.33337 4.02234 2.85571 3.5 3.50004 3.5H4.01156C5.6176 3.5 7.01754 4.59304 7.40706 6.15112L7.61927 7H21.5913C23.8304 7 25.4937 9.07347 25.0079 11.2592L23.7116 17.0926C23.3558 18.694 21.9354 19.8334 20.295 19.8334H11.1552C9.54913 19.8334 8.1492 18.7403 7.75971 17.1822L5.1434 6.71704C5.01356 6.19768 4.5469 5.83334 4.01156 5.83334H3.50004C2.85571 5.83334 2.33337 5.311 2.33337 4.66666Z"
              fill="#0063F7"
            ></path>
            <path
              opacity="0.5"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.0834 24.5C12.0498 24.5 12.8334 23.7164 12.8334 22.75C12.8334 21.7836 12.0498 21 11.0834 21C10.1169 21 9.33337 21.7836 9.33337 22.75C9.33337 23.7164 10.1169 24.5 11.0834 24.5Z"
              fill="#0063F7"
            ></path>
            <path
              opacity="0.5"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.4166 24.5C21.3831 24.5 22.1666 23.7164 22.1666 22.75C22.1666 21.7836 21.3831 21 20.4166 21C19.4502 21 18.6666 21.7836 18.6666 22.75C18.6666 23.7164 19.4502 24.5 20.4166 24.5Z"
              fill="#0063F7"
            ></path>
          </svg>
          <span class=" absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white ">
            0
          </span>
        </button>
        <div className="wishlist">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-[#D90077] w-[25px] h-[25px] pl-8 my-[25px]"
          />
        </div>
      </header>
    </div>
  );
}

export default Test;
