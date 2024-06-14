import React from "react";
import BookDetails from "./BookDetails";

const BookList = ({ books, onFavouritedBook }) => {
  const bookArray = books.map((book) => {
    return (
      <BookDetails
        key={book._id}
        book={book}
        onFavouritedBook={onFavouritedBook}
      />
    );
  });
  return (
    <div className="font-bold relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4 h-[85vh] overflow-y-auto place-items-center">
        {bookArray}
      </div>
    </div>
  );
};

export default BookList;
