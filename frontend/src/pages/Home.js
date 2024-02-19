import React, { useEffect, useState } from "react";
import Book from "../components/Book";
import axios from "axios";
import download from "downloadjs";

const Home = () => {
  const [bookList, setBookList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await axios.get("/api/book/files");
        setErrorMsg("");
        setBookList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="font-bold relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4 h-[85vh] overflow-y-auto place-items-center">
        {books &&
          books.map((book) => {
            return <Book key={book._id} book={book} />;
          })}
      </div>
    </div>
  );
};

export default Home;
