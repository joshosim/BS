import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import Pic from "../images/engrude-removebg-preview.png";

const Profile = () => {
  //to handle the editing of profile of the user
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [update, setUpdate] = useState(true);

  const handleEdit = () => {
    setUpdate(false);
  };

  return (
    <div className="font-bold h-screen flex items-center justify-center">
      {/* <div className="h-[50%] bg-[#ED4D6E]"></div>
      <div className="h-[50%] bg-[#E0D8DE]"></div> */}
      <div className="relative rounded-3xl bg-[#E0D8DE] shadow-black shadow-md h-[75%] w-[85%] grid place-content-center text-center ">
        {update && (
          <div>
            <img
              src={Pic}
              alt="none"
              className="h-[200px] w-[200px] rounded-full bg-white"
            />
            <FaEdit
              size={30}
              className="absolute top-0 right-0 m-5 cursor-pointer"
              onClick={handleEdit}
            />

            <h1 className="text-2xl md:text-3xl my-2">Uka</h1>
            <h2 className="text-xl md:text-2xl my-2 font-light">
              40 <span>years</span>
            </h2>
            <h3 className="text-[1rem] md:text-xl my-2 font-light">
              07066530998
            </h3>
          </div>
        )}
        {!update && (
          <div className="text-start">
            <form action="" className="p-3">
              <h1 className="text-2xl mb-2 text-center">Update Profile</h1>
              <label htmlFor="name">Name:</label>
              <input
                className="my-1 py-1 px-2 rounded-lg"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label htmlFor="age">Age:</label>
              <input
                className="my-1 py-1 px-2 rounded-lg"
                type="number"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
              <label htmlFor="phone">Phone:</label>
              <input
                className="my-1 py-1 px-2 rounded-lg"
                type="text"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <label htmlFor="image">Image:</label>
              <input
                type="file"
                className="my-1"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  setUpdate(true);
                }}
                className="bg-black my-2 py-2 rounded-xl text-[#ED4D6E]"
              >
                Update
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
