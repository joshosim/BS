import React, { useState } from "react";

const AddNewBook = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-[#CFD2B2]">
      <form className="mx-auto rounded-2xl my-10  p-3 font-bold">
        <h1 className="text-center text-2xl">Add a New Book</h1>
        <label htmlFor="email">Title:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="px-2 py-2 rounded-xl my-2"
        />
        <label htmlFor="password">Author:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="px-2 py-2 rounded-xl my-2"
        />
        <label htmlFor="password">Book Description:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="px-2 py-2 rounded-xl my-2"
        />
        <label htmlFor="password">Book Image:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="px-2 py-2 rounded-xl my-2"
        />
        <label htmlFor="password">Number of Pages:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
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
