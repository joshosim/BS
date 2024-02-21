import React, { useState, useRef } from "react";
import { useBookContext } from "../hooks/useBookContext";
import axios from "axios";
import Dropzone from "react-dropzone";

const AddNewBook = ({ props }) => {
  const [file, setFile] = useState(null);
  const [previewSrc, setPreviewSrc] = useState("");
  const [state, setState] = useState({
    title: "",
    description: "",
    author: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
  const dropRef = useRef();
  const { dispatch } = useBookContext();
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
  };

  const updateBorder = (dragState) => {
    if (dragState === "over") {
      dropRef.current.style.border = "2px solid #000";
    } else if (dragState === "leave") {
      dropRef.current.style.border = "2px dashed #e9ebeb";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { title, description, author } = state;
      if (
        title.trim() !== "" &&
        description.trim() !== "" &&
        author.trim() !== ""
      ) {
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("title", title);
          formData.append("description", description);
          formData.append("author", author);

          setErrorMsg("");
          await axios.post(`/api/book/upload`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          props.history.push("/");
        } else {
          setErrorMsg("Please select a file to add.");
        }
      } else {
        setErrorMsg("Please enter all the field values.");
      }
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };

  return (
    <div className="bg-[#CFD2B2] max-w-[350px] flex justify-center items-center mx-auto">
      <form className="p-3 font-bold" onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl">Add a New Book</h1>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          placeholder="Enter title"
          onChange={handleInputChange}
          className="px-2 py-2 rounded-xl my-2"
        />

        <label htmlFor="Description">Book Description:</label>
        <input
          type="text"
          placeholder="Enter description"
          onChange={handleInputChange}
          className="px-2 py-2 rounded-xl my-2"
        />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          placeholder="Enter author"
          onChange={handleInputChange}
          className="px-2 py-2 rounded-xl my-2"
        />
        <Dropzone
          onDrop={onDrop}
          onDragEnter={() => updateBorder("over")}
          onDragLeave={() => updateBorder("leave")}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: "drop-zone" })} ref={dropRef}>
              <input {...getInputProps()} />
              <p>Drag and drop a file OR click here to select a file</p>
              {file && (
                <div>
                  <strong>Selected file:</strong> {file.name}
                </div>
              )}
            </div>
          )}
        </Dropzone>
        {previewSrc ? (
          isPreviewAvailable ? (
            <div className="image-preview">
              <img className="preview-image" src={previewSrc} alt="Preview" />
            </div>
          ) : (
            <div className="preview-message">
              <p>No preview available for this file</p>
            </div>
          )
        ) : (
          <div className="preview-message">
            <p>Image preview will be shown here after selection</p>
          </div>
        )}
        <button className="rounded-xl bg-black text-white py-2 my-2  focus:scale-105">
          Add
        </button>
        {progress.started && (
          <progress
            className="w-full block"
            max="100"
            value={progress.started}
          ></progress>
        )}
        {msg && <span>{msg}</span>}
      </form>
    </div>
  );
};

export default AddNewBook;
