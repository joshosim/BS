import React, { useEffect, useState } from "react";
// import download from "downloadjs";
// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// import { FaDownload } from "react-icons/fa6";
import BookImage from "../images/IMG-20230508-WA0042.jpg";
import { formatDistanceToNow } from "date-fns";

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
      </div>
    </div>
  );
};

export default Home;
