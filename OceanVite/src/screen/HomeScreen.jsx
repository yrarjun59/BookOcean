import React from "react";
import Caurosel from "../components/Caurosel";
import Book from "../components/Book";
// import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listBooks } from "../actions/bookActions";
import { useEffect } from "react";

function HomeScreen() {
  const carouselImages = [
    "./images/rich_dad.jpg",
    "./images/wings_of_fire.jpg",
    "./images/bold.webp",
  ];

  const dispatch = useDispatch();
  // const location = useLocation();
  const bookList = useSelector((state) => state.bookList);
  console.log({ bookList });
  const { error, loading, books } = bookList;

  // let keyword = history.location.search;

  useEffect(() => {
    dispatch(listBooks());
  }, [dispatch]);

  return (
    <div className="mx-[150px] my-5">
      <p className="text-center my-[25px] text-[#D90077] text-[40px] font-bold">
        The Book is the Magic You hold on your hand
      </p>

      {/* Image Container Caurosel */}
      <Caurosel images={carouselImages} />
      
      <h1 className="mx-auto font-bold mt-2">Books</h1>
      {books && books.length > 0 ? (
        books.map((book) => (
          <div key={book.id} className="grid grid-cols-4 gap-y-8 gap-x-4 my-12 bg-red-500">
            <Book book={book} />
          </div>
        ))
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
}

export default HomeScreen;
