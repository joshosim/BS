import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaDownload } from "react-icons/fa6";
import BookImage from "../images/IMG-20230508-WA0042.jpg";
// import { useBookContext } from "../hooks/useBookContext";
// import { useParams } from "react-router-dom";
const BookDetails = ({ book }) => {
  //  const { id } = useParams();
  //  const { data } = useData();

  //  const item = data.find((item) => item.id === parseInt(id));
  //const { books } = useBookContext();
  const { title, description, author } = book;
  const [heart, setHeart] = useState(false);
  const handleChange = () => {
    setHeart(!heart);
  };

  return (
    <div className="border-2 border-black rounded-xl relative w-[250px]">
      <div className="h-[250px] bg-[#010001] rounded-tl-xl rounded-tr-xl">
        <img src={BookImage} alt="ok" className="rounded-tl-xl rounded-tr-xl" />
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
        <h1>{title}</h1>
        <p className="font-light">{author}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BookDetails;
