import React from "react";
import BookDetails from "./BookDetails";

const Favourite = ({ books, onFavouritedBook }) => {
  const favouriteBooks = books.filter((book) => book.favouriteId);

  const favouriteBookCard = favouriteBooks.map((book) => (
    <BookDetails
      key={book._id}
      book={book}
      onFavouritedBook={onFavouritedBook}
    />
  ));

  return (
    <div>
      <ul>{favouriteBookCard}</ul>
    </div>
  );
};

export default Favourite;
// .filter((item) => {
//   const lowerCaseSearchValue = searchValue.toLowerCase();
//   const upperCaseSearchValue = searchValue.toUpperCase();
//   return lowerCaseSearchValue === ""
//     ? item
//     : item.title.toLowerCase().includes(lowerCaseSearchValue) ||
//         item.title.toUpperCase().includes(upperCaseSearchValue);
// })
