import React, { useEffect, useState } from "react";
import MyImage from "../images/IMG-20230508-WA0042.jpg";
// import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { AiFillDelete, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Home = () => {
  const [bookList, setBookList] = useState([]);
  const [favourite, setFavourite] = useState();

  const handleFavourite = () => {
    setFavourite(!favourite);
  };

  const handleDelete = async (id) => {
    const response = await fetch("http://localhost:4000/api/books/" + id, {
      method: "DELETE",
    });
    // if (!response.ok) {
    //   throw new Error(`Error deleting book: ${response.statusText}`);
    // }
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

    fetchWorkouts();
  }, []);

  return (
    <div className="font-bold relative">
      {/* // .filter((item) => {
            //   return search === "" ? item : item.title.includes(search);
            // }) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4 h-[85vh] overflow-y-auto place-items-center">
        {bookList &&
          bookList.map((bookFile) => (
            <div
              key={bookFile._id}
              className="h-[25rem] w-full rounded-lg border-2 border-blue-500 relative"
            >
              <img
                src={MyImage}
                alt="/"
                className="h-60 w-full object-cover rounded-t-lg"
              />
              <AiFillDelete
                size={40}
                className="cursor-pointer shadow-xl absolute top-0 right-0 m-4"
                onClick={() => handleDelete(bookFile._id)}
              />
              {favourite ? (
                <AiOutlineHeart
                  size={40}
                  color="red"
                  className="cursor-pointer shadow-xl absolute top-12 right-0 m-4"
                  onClick={() => handleFavourite()}
                />
              ) : (
                <AiFillHeart
                  size={40}
                  color="red"
                  className="cursor-pointer shadow-xl absolute top-12 right-0 m-4"
                  onClick={() => handleFavourite()}
                />
              )}
              <h1 className="px-3 pt-2 font-bold text-[1rem]">
                {bookFile.title}
              </h1>
              <p className="px-3 text-xs">{bookFile.description}</p>
              <div className="absolute bottom-0 left-0 cursor-pointer flex justify-center items-center gap-2 m-3 bg-blue-700 hover:bg-blue-500 transition-all duration-500 py-2.5 px-4 rounded-xl w-[150px]">
                <p>See More</p> <FaArrowRight />
              </div>
            </div>
          ))}
        {!bookList && <div>No files found. please add some.</div>}
      </div>
    </div>
  );
};

export default Home;
