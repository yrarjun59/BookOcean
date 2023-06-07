import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Caurosel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="relative  h-[300px] bg-[#FFF3D7]">
      <div className>
        <img
          className="w-[200px] y-[300px] mx-[370px] align-middle"
          src={images[currentIndex]}
          alt={`Carousel Image ${currentIndex + 1}`}
        />
        <button
          className="text-[#ffffff] absolute top-1/2 left-0 transform -translate-y-1/2 font-bold p-5 focus:outline-none border-2 border-[#03314B] rounded-[10px] h-[300px]"
          onClick={handlePrev}
        >
          <FontAwesomeIcon
            icon={faAngleRight}
            className="h-[100px] text-[#D90077]"
          />
        </button>
        <button
          className="text-[#ffffff] font-bold absolute top-1/2 right-0 transform -translate-y-1/2  border-1 focus:outline-none h-[300px] p-5 border-2 border-[#03314B] rounded-[10px] "
          onClick={handleNext}
        >
          {/*  */}
          {/* border-[#03314B] border-1 */}
          <FontAwesomeIcon
            icon={faAngleLeft}
            // onClick={handleNext}
            className="h-[100px] text-[#D90077]"
          />
        </button>
      </div>
    </div>
  );
};

export default Caurosel;
