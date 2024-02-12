import React, { useState } from "react";
import { useBookContext } from "../hooks/useBookContext";

const AddNewBook = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [file, setFile] = useState(null);
  const { dispatch } = useBookContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const book = { title, description, author };

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("author", author);

    const response = await fetch("/api/book/upload", formData, {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      alert(json.error);
    }
    if (response.ok) {
      setAuthor("");
      setDescription("");
      setTitle("");
      alert("New Book Added", json);
      dispatch({ type: "ADD_BOOK", payload: json });
    }
  };
  return (
    <div className="bg-[#CFD2B2] max-w-[350px] flex justify-center items-center mx-auto">
      <form className="p-3 font-bold" onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl">Add a New Book</h1>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="px-2 py-2 rounded-xl my-2"
        />

        <label htmlFor="Description">Book Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="px-2 py-2 rounded-xl my-2"
        />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          className="px-2 py-2 rounded-xl my-2"
        />
        <label htmlFor="file">Upload File</label>
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
          className="px-2 py-2 rounded-xl my-2"
        />
        <button className="rounded-xl bg-black text-white py-2 my-2  focus:scale-105">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddNewBook;
