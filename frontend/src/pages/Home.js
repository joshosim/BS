import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/searchContext";
import { useAuthContext } from "../hooks/useAuthContext";
import BookList from "./BookList";
import Favourite from "./Favourite";
// import { DialogContext } from "../context/DialogContext";

const Home = () => {
  const [books, setBooks] = useState([]);
  const { searchValue } = useContext(SearchContext);
  const { user } = useAuthContext();
  //const { dialog } = useContext(DialogContext);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/books/");
      const json = await response.json();
      setBooks(json);
      if (!response.ok) {
        console.error("Error fetching data: ", json.error);
      }
    };
    if (user) {
      fetchWorkouts();
    }
  }, [user]);

  const handleFavouritedBook = (updatedBook) => {
    const updatedBookArray = books.map((book) => {
      if (book._id === updatedBook._id) {
        return updatedBook;
      } else {
        return book;
      }
    });
    setBooks(updatedBookArray);
  };

  return (
    <div
      className={
        user
          ? `font-bold relative`
          : `flex justify-center items-center min-h-[50vh]`
      }
    >
      {user && (
        <div>
          {/* {books &&
            books
              .filter((item) => {
                const lowerCaseSearchValue = searchValue.toLowerCase();
                const upperCaseSearchValue = searchValue.toUpperCase();
                return lowerCaseSearchValue === ""
                  ? item
                  : item.title.toLowerCase().includes(lowerCaseSearchValue) ||
                      item.title.toUpperCase().includes(upperCaseSearchValue);
              })
              .map((bookFile) => ( */}
          <BookList books={books} onFavouritedBook={handleFavouritedBook} />
          <Favourite books={books} onFavouritedBook={handleFavouritedBook} />
          {/* ))} */}
        </div>
      )}
      {!user && <div>Login to access books</div>}
    </div>
  );
};

export default Home;
