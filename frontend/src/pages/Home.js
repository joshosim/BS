import React, { useEffect, useState } from "react";
import { data } from "../fake-data.js/data";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaDownload } from "react-icons/fa6";
import BookImage from "../images/IMG-20230508-WA0042.jpg";

const Home = () => {
  const [heart, setHeart] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("localhost:4000/api/book/");
    };
  }, []);

  const handleChange = () => {
    setHeart(!heart);
  };
  return (
    <div className="font-bold relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4 h-[85vh] overflow-y-auto place-items-center">
        {data.map((elements) => {
          return (
            <div
              className="border-2 border-black rounded-xl relative w-[250px]"
              key={elements.id}
            >
              <div className="h-[250px] bg-[#010001] rounded-tl-xl rounded-tr-xl">
                <img
                  src={BookImage}
                  alt="ok"
                  className="rounded-tl-xl rounded-tr-xl"
                />
              </div>
              <div className="flex justify-between items-center flex-col gap-2 absolute top-0 right-0 m-2">
                {heart ? (
                  <AiFillHeart
                    size={25}
                    color="red"
                    className="cursor-pointer"
                    onClick={handleChange}
                  />
                ) : (
                  <AiOutlineHeart
                    size={25}
                    color="red"
                    className="cursor-pointer"
                    onClick={handleChange}
                  />
                )}
                <FaDownload
                  size={25}
                  color="green"
                  className="cursor-pointer"
                  title="Download"
                />
              </div>
              <div className="text-center">
                <h1>{elements.name}</h1>
                <p className="font-light">{elements.author}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
