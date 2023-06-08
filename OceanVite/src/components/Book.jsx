import React from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartActions";

function Book({ book }) {
  return (
    <div>
        <div className="relative h-[350px] w-[200px] rounded-[10px]">
          {/* images */}
          <Link to={`/book/${book.id}`}>
            <img
              src={book.image}
              alt="book image"
              className="rounded-tr-[10px] rounded-tl-[10px] h-[270px] w-[200px] object-contain"
            />
          </Link>
          {/* description containr */}
          <div className="flex flex-col bg-white">
            <h4 className="font-bold text-center text-textColor w-auto">
              {book.name}
            </h4>
            <p className="text-center text-textColor font-bold">
              Rs {book.price}
            </p>
            <button className="h-[30px] bg-[#FF7A5C] text-white font-bold  rounded-bl-[10px] rounded-br-[10px]">
              Add to Cart
            </button>
          </div>

          {/* <div className="absolute top-12"> */}
          <span className="absolute font-bold text-white bg-pinkColor top-0 left-0">
            {book.rating}
          </span>
          {/* </div> */}
        </div>
        <button className="bg-pinkColor p-2 rounded-[5px] text-white font-bold absolute right-0 bottom-5 ">
          Add Book
        </button>
    </div>
  );
}

export default Book;
