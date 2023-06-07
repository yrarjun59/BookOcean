import React from "react";

function Products() {
  return (
    <div className="relative drop-shadow-2xl">
      <div className="grid grid-cols-4 gap-y-8 gap-x-4 my-12 ">
        {/* 1 images */}
        <div className="relative h-[350px] w-[200px] rounded-[10px]">
          {/* images */}
          <img
            src="./images/bg.jpg"
            alt="book image"
            className="rounded-tr-[10px] rounded-tl-[10px] h-[270px] w-[200px] object-contain"
          />
          {/* description contaienr */}
          <div className="flex flex-col bg-white">
            <h4 className="font-bold text-center text-textColor w-auto">
              Bhagwat Gita
            </h4>
            <p className="text-center text-textColor">Rs 19.99</p>
            <button className="h-[30px] bg-[#FF7A5C] text-white font-bold  rounded-bl-[10px] rounded-br-[10px]">
              Add to Cart
            </button>
          </div>

          {/* <div className="absolute top-12"> */}
          <span className="absolute font-bold text-white bg-pinkColor top-0 left-0">
            4.5(199)
          </span>
          <p className="absolute font-bold text-white bg-pinkColor bottom-0 right-0 w-[80px]  p-2">
            Nepali
          </p>
          {/* </div> */}
        </div>
      </div>
      <button className="bg-pinkColor p-2 rounded-[5px] text-white font-bold absolute right-0 bottom-5 ">
        Add Book
      </button>
    </div>
  );
}

export default Products;
