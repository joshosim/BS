import React, { useState } from "react";

const AddNewBook = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null);

  return (
    <div className="bg-[#CFD2B2]">
      <form className="mx-auto rounded-2xl my-10  p-3 font-bold">
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
        <button className="rounded-xl bg-black text-white py-2 my-2">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddNewBook;
