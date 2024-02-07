import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useBookContext } from "../hooks/useBookContext";

const AddNewBook = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null);
  const { dispatch } = useBookContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-[#CFD2B2] max-w-[350px] flex justify-center items-center mx-auto">
      <form className="p-3 font-bold" onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl">Add a New Book</h1>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          value={bookTitle}
          onChange={(e) => {
            setBookTitle(e.target.value);
          }}
          className="px-2 py-2 rounded-xl my-2"
        />

        <label htmlFor="bookDescription">Book Description:</label>
        <input
          type="text"
          value={bookDescription}
          onChange={(e) => {
            setBookDescription(e.target.value);
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
        <label htmlFor="bookImage">Book Image:</label>
        <input
          type="file"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
          className="px-2 py-2 rounded-xl my-2"
        />
        <Link to="/">
          <button className="rounded-xl bg-black text-white py-2 my-2">
            Add
          </button>
        </Link>
      </form>
    </div>
  );
};

export default AddNewBook;
