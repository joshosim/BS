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
              className="border-2 border-black rounded-xl relative w-[250px]"
            >
              <img src={BookImage} alt="/" />
              <p className="max-w-[250px]">{bookFile.name}</p>
              <div className="text-center">
                <p>
                  {formatDistanceToNow(new Date(bookFile.createdAt), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            </div>
          ))}
        {!bookList && <div>No files found. please add some.</div>}
      </div>
    </div>
  );
};

export default Home;
