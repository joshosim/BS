import React, { useEffect, useState } from "react";
import BookImage from "../images/IMG-20230508-WA0042.jpg";
import { formatDistanceToNow } from "date-fns";
import Logo from "../images/logo.png";

const Home = () => {
  const [bookList, setBookList] = useState([]);
  const [file, setFile] = useState([]);

  const handleAdd = () => {};

  const handleSubmit = () => {};
  console.log(file);

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((data) => setBookList(data))
      .catch((err) => console.error("Error fetching data: ", err));
  }, []);

  return (
    <div className="font-bold relative">
      <div
        className="cursor-pointer absolute bottom-10 right-10 bg-blue-500 rounded-full p-2.5 shadow-lg border-none hover:scale-105"
        onClick={handleAdd()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-9 h-9"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
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
      <div className={``}>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              src={Logo}
              alt="/"
              className="w-36 grid place-content-center"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 flex items-center gap-2 justify-center">
              Add a New Book
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div>
                <div className="mt-2">
                  <input
                    type="file"
                    placeholder="Select File"
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                    }}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
