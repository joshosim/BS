import React from "react";

import BookImage1 from "../images/book_library.jpg";

const BookDetails = ({ book }) => {
  const { title, description, author } = book;

  return (
    <div className="border-2 border-black rounded-xl relative w-[250px]">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={BookImage1} alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{title}</div>
          <p className="font-light">{author}</p>
          <p class="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
