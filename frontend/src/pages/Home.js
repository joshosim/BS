import React, { useState } from "react";
import AddNewBook from "../components/AddNewBook";
import { data } from "../fake-data.js/data";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaDownload } from "react-icons/fa6";

const Home = () => {
  const [heart, setHeart] = useState(false);
  const handleChange = () => {
    setHeart(!heart);
  };
  return (
    <div className="font-bold grid grid-cols-3">
      <div className="grid grid-cols-3 gap-4 p-4 col-span-2 border-r-4 border-r-black h-screen overflow-y-auto">
        {data.map((elements) => {
          return (
            <div className="border-2 border-black rounded-xl relative">
              <div className="h-[250px] bg-[#010001] rounded-tl-xl rounded-tr-xl"></div>
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
              <h1>{elements.name}</h1>
              <p>{elements.author}</p>
            </div>
          );
        })}
      </div>
      <AddNewBook className="col-span-1 h-screen overflow-y-auto" />
    </div>
  );
};

export default Home;
