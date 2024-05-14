import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddNewBook = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigate = useNavigate();

  const uploadFile = async (type) => {
    const data = new FormData();
    data.append("file", type === "image" ? book : null);
    data.append("upload_preset", type === "image" ? "books_preset" : null);
    data.append("title", title);
    data.append("description", description);
    try {
      let cloudname = "dtvgy6zsm";

      let api = `https://api.cloudinary.com/v1_1/${cloudname}/image/upload`;

      const response = await axios.post(api, data);
      const { secure_url } = response.data;
      console.log(secure_url);
      return secure_url;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const bookUrl = await uploadFile("image");

      await axios.post(
        "http://localhost:4000/api/books/book",
        { bookUrl, title, description },
        {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(progress);
          },
        }
      );

      setBook(null);
      alert("File has successfully been uploaded");
      setLoading(false);

      navigate("/");
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 flex items-center gap-2 justify-center">
            Add a New Book
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Title of book"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                  required
                  className="px-2 block w-full rounded-md border border-blue-500 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
                />
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Description of book"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  value={description}
                  required
                  className="px-2 block w-full rounded-md border border-blue-500 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
                />
              </div>
              <div className="mt-2">
                <input
                  type="file"
                  accept="/books/*"
                  id="book"
                  onChange={(e) => {
                    setBook(e.target.files[0]);
                  }}
                  className="px-2 block w-full rounded-md border border-blue-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loading && <p>Adding...</p>}
                {!loading && <p>Add</p>}
              </button>
            </div>
          </form>
        </div>
        <div class="w-full mt-10 shadow bg-grey-light">
          <div
            class="bg-blue text-xs leading-none py-1 text-center text-white"
            aria-valuenow={uploadProgress}
            style={{ width: `${uploadProgress}%` }}
          >
            {uploadProgress}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewBook;
