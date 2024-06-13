import React, { useContext, useEffect, useState } from "react";
import BookImage2 from "../images/bookshelf.jpg";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { AiFillDelete, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { SearchContext } from "../context/searchContext";
import { FavouriteContext } from "../context/favouriteContext";
import { useAuthContext } from "../hooks/useAuthContext";
// import { DialogContext } from "../context/DialogContext";

const Home = () => {
  const [bookList, setBookList] = useState([]);
  const { searchValue } = useContext(SearchContext);
  const { favourite, handleFavourite } = useContext(FavouriteContext);
  const { user } = useAuthContext();
  //const { dialog } = useContext(DialogContext);

  const handleDelete = async (id) => {
    const response = await fetch("http://localhost:4000/api/books/" + id, {
      method: "DELETE",
    });
    if (response.ok) {
      alert("Book deleted successfully!", bookList.id);
    }
  };

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/books/");
      const json = await response.json();
      setBookList(json);
      if (!response.ok) {
        console.error("Error fetching data: ", json.error);
      }
    };
    if (user) {
      fetchWorkouts();
    }
  }, [user]);

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
    <div
      className={
        user
          ? `font-bold relative`
          : `flex justify-center items-center min-h-[50vh]`
      }
    >
      {user && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4 h-[85vh] overflow-y-auto place-items-center">
          {bookList &&
            bookList
              .filter((item) => {
                const lowerCaseSearchValue = searchValue.toLowerCase();
                const upperCaseSearchValue = searchValue.toUpperCase();
                return lowerCaseSearchValue === ""
                  ? item
                  : item.title.toLowerCase().includes(lowerCaseSearchValue) ||
                      item.title.toUpperCase().includes(upperCaseSearchValue);
              })
              .map((bookFile) => (
                <div
                  key={bookFile._id}
                  className="h-[25rem] w-full rounded-lg relative shadow-lg"
                >
                  <img
                    src={BookImage2}
                    alt="/"
                    className="h-60 w-full object-cover rounded-t-lg"
                  />
                  <div className="flex justify-between items-center px-2 my-2">
                    <h1 className="font-bold text-[1rem] text-blue-700">
                      {bookFile.title}
                    </h1>
                    <div className="flex justify-center items-center gap-2">
                      {!favourite && (
                        <AiOutlineHeart
                          size={18}
                          color="red"
                          className="cursor-pointer shadow-xl"
                          onClick={handleFavourite}
                        />
                      )}
                      {favourite && (
                        <AiFillHeart
                          size={18}
                          color="red"
                          className="cursor-pointer shadow-xl"
                          onClick={handleFavourite}
                        />
                      )}
                      <AiFillDelete
                        size={18}
                        className="cursor-pointer shadow-xl"
                        onClick={() => handleDelete(bookFile._id)}
                      />
                      <FaDownload
                        size={18}
                        className="cursor-pointer shadow-xl"
                        onClick={() => handleDownload(bookFile.bookUrl)}
                      />
                    </div>
                  </div>
                  <p className="px-2 text-[1rem]">{bookFile.description}</p>
                  <div className="absolute bottom-0 left-0 cursor-pointer flex justify-center items-center gap-2 m-3 bg-[#E3873B] hover:bg-blue-500 transition-all duration-500 py-2.5 px-4 rounded-xl w-[150px]">
                    <p>See More</p> <FaArrowRight />
                  </div>
                </div>
              ))}
        </div>
      )}
      {!user && <div>Login to access books</div>}
    </div>
  );
};

export default Home;
