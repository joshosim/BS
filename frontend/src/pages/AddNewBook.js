import React, { useState } from "react";
import axios from "axios";

const AddNewBook = () => {
  const [file, setFile] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    await axios
      .post("http://localhost:4000/files", formData)
      .then((response) => response.json())
      .then((data) => alert("File has been uploaded successfully!", data))
      .catch((err) => console.error("Error sending data: ", err));
  };

  return (
    <div className="bg-[#CFD2B2] max-w-[350px] flex justify-center items-center mx-auto">
      <form className="p-3 font-bold" onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl">Add a New Book</h1>
        <input
          type="file"
          placeholder="Select File"
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
