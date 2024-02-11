import React, { useEffect } from "react";
import { useBookContext } from "../hooks/useBookContext";
import Book from "../components/Book";

const Home = () => {
  const { books, dispatch } = useBookContext();
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/api/book/");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_BOOK", payload: json });
      }
    };
    fetchBooks();
  }, [dispatch]);

  return (
    <div className="font-bold relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4 h-[85vh] overflow-y-auto place-items-center">
        {books &&
          books.map((book) => {
            return <Book key={book._id} book={book} />;
          })}
      </div>
    </div>
  );
};

export default Home;
