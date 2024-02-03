import React from "react";
import AddNewBook from "../components/AddNewBook";
import { data } from "../fake-data.js/data";

const Home = () => {
  return (
    <div className="font-bold grid grid-cols-3 ">
      <div className="grid grid-cols-3 gap-4 p-4 col-span-2 border-r-4 border-r-black h-screen">
        {data.map((elements) => {
          return (
            <div className="border-2 border-black rounded-xl">
              <div className="h-[250px] bg-[#010001] rounded-tl-xl rounded-tr-xl"></div>
              <h1>{elements.name}</h1>
              <p>{elements.author}</p>
            </div>
          );
        })}
      </div>
      <AddNewBook className="col-span-1" />
    </div>
  );
};

export default Home;
