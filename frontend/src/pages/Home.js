import React, { useEffect, useState } from "react";
import axios from "axios";
import download from "downloadjs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaDownload } from "react-icons/fa6";
import BookImage from "../images/IMG-20230508-WA0042.jpg";
import { formatDistanceToNow } from "date-fns";

const Home = () => {
  const [bookList, setBookList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await axios.get("/api/book/");
        setErrorMsg("");
        setBookList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };
    fetchBooks();
  }, []);

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get(`/download/${id}`, {
        responseType: "blob",
      });
      const split = path.split("/");
      const filename = split[split.length - 1];
      setErrorMsg("");
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg("Error while downloading file. Try again later");
      }
    }
  };
  const [heart, setHeart] = useState(false);
  const handleChange = () => {
    setHeart(!heart);
  };

  return (
    <div className="font-bold relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4 h-[85vh] overflow-y-auto place-items-center">
        {bookList.length > 0 ? (
          bookList.map(
            ({ _id, title, description, author, file_path, file_mimetype }) => (
              <div
                key={_id}
                className="border-2 border-black rounded-xl relative w-[250px]"
              >
                {/* <Link to={`/book-details/${book._id}`}> */}
                <div className="h-[250px] bg-[#010001] rounded-tl-xl rounded-tr-xl">
                  <img
                    src={BookImage}
                    alt="ok"
                    className="rounded-tl-xl rounded-tr-xl"
                  />
                </div>
                {/* </Link> */}
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
                    onClick={() => {
                      downloadFile(_id, file_path, file_mimetype);
                    }}
                  />
                </div>
                <div className="text-center">
                  <h1>{title}</h1>
                  <p className="font-light">{author}</p>
                  <p className="font-light">{description}</p>

                  <p>
                    {formatDistanceToNow(new Date(), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              </div>
            )
          )
        ) : (
          <div>No files found. please add some.</div>
        )}
      </div>
    </div>
  );
};

export default Home;
