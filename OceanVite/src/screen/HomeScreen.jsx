import React from "react";
import Caurosel from "../components/Caurosel";
import Products from "../components/Products";
import Header from "../components/Header";

function HomeScreen() {
  const carouselImages = [
    "./images/1.webp",
    "./images/2.jfif",
    "./images/3.jfif",
  ];
  return (
    <div className="mx-[150px] my-5">
      <p className="text-center my-[25px] text-[#D90077] text-[40px] font-bold">
        The Book is the Magic You hold on your hand
      </p>
      {/* Image Container Caurosel */}
      <Caurosel images={carouselImages} />
      {/*  */}

      {/* Products */}
      <Products />
    </div>
  );
}

export default HomeScreen;
