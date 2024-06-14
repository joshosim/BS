import React, { useState } from "react";
import BookImage2 from "../images/bookshelf.jpg";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { AiFillDelete, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { SearchContext } from "../context/searchContext";

const BookDetails = ({ book, onFavouritedBook }) => {
  const { _id, title, description, bookUrl, favouriteId } = book;

  //setting state for favourite
  const [isFavourited, setIsFavourited] = useState(favouriteId);

  //PATCH request function for favourite i want it to always be up to date
  const handleFavouriteChange = () => {
    setIsFavourited((isFavourited) => !isFavourited);
    fetch(`http://localhost:4000/api/books/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favouriteId: !favouriteId }),
    })
      .then((response) => response.json())
      .then((updatedBook) => onFavouritedBook(updatedBook));
  };

  const handleDelete = async (id) => {
    const response = await fetch("http://localhost:4000/api/books/" + id, {
      method: "DELETE",
    });
    if (response.ok) {
      alert("Book deleted successfully!", _id);
    }
  };

  const handleDownload = (url) => {
    const anchorElement = document.createElement("a");
    anchorElement.href = url;
    anchorElement.download = "BS_PDF" || url.split("/").pop(); // Use filename if provided, otherwise extract from URL
    anchorElement.style.display = "none"; // Hide the anchor element
    document.body.appendChild(anchorElement); // Append to body (not strictly necessary)
    anchorElement.click(); // Simulate a click to initiate download
    document.body.removeChild(anchorElement);
  };

  return (
    <div key={_id} className="h-[25rem] w-full rounded-lg relative shadow-lg">
      <img
        src={BookImage2}
        alt="/"
        className="h-60 w-full object-cover rounded-t-lg"
      />
      <div className="flex justify-between items-center px-2 my-2">
        <h1 className="font-bold text-[1rem] text-blue-700">{title}</h1>
        <div className="flex justify-center items-center gap-2">
          {isFavourited ? (
            <AiOutlineHeart
              size={18}
              color="red"
              className="cursor-pointer shadow-xl"
              onClick={handleFavouriteChange}
            />
          ) : (
            <AiFillHeart
              size={18}
              color="red"
              className="cursor-pointer shadow-xl"
              onClick={handleFavouriteChange}
            />
          )}
          <AiFillDelete
            size={18}
            className="cursor-pointer shadow-xl"
            onClick={() => handleDelete(_id)}
          />
          <FaDownload
            size={18}
            className="cursor-pointer shadow-xl"
            onClick={() => handleDownload(bookUrl)}
          />
        </div>
      </div>
      <p className="px-2 text-[1rem]">{description}</p>
      <div className="absolute bottom-0 left-0 cursor-pointer flex justify-center items-center gap-2 m-3 bg-[#E3873B] hover:bg-blue-500 transition-all duration-500 py-2.5 px-4 rounded-xl w-[150px]">
        <p>See More</p> <FaArrowRight />
      </div>
    </div>
  );
};

export default BookDetails;
