import React, { useEffect, useState } from "react";
import BookImage from "../images/IMG-20230508-WA0042.jpg";
import { formatDistanceToNow } from "date-fns";
import MyImage from "../images/IMG-20230508-WA0042.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((data) => setBookList(data))
      .catch((err) => console.error("Error fetching data: ", err));
  }, []);

  return (
    <div className="font-bold relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4 h-[85vh] overflow-y-auto place-items-center">
        {bookList &&
          bookList.map((bookFile) => (
            <div
              key={bookFile._id}
              className="border-2 border-white rounded-xl relative w-[250px]"
            >
              <div class="max-w-sm rounded-t-xl overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src={BookImage}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{bookFile.name}</div>
                  <p className="font-light">
                    {formatDistanceToNow(new Date(bookFile.createdAt), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        {!bookList && <div>No files found. please add some.</div>}
        <div className="h-auto w-full rounded-lg border-2 border-blue-500">
          <img
            src={MyImage}
            alt="l"
            className="h-60 w-full object-cover rounded-t-lg"
          />
          <h1 className="pl-3 pt-2 font-bold text-[1rem]">My new book title</h1>
          <p className="pl-3 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            cupiditate et quam ima voluptatibus?
          </p>
          <div className="flex justify-center items-center gap-2 m-3 bg-blue-700 hover:bg-blue-500 transition-all duration-500 py-2.5 px-4 rounded-xl w-[150px]">
            <p>See More</p> <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
