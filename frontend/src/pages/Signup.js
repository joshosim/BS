import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(username, phone, age, password);
  };

  return (
    <form
      className="max-w-[500px] mx-auto rounded-2xl my-10 bg-[#ED4D6E] p-3 font-bold"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center text-2xl">Sign up</h1>
      <label htmlFor="username">Username:</label>
      <input
        type="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        className="px-2 py-2 rounded-xl my-2"
      />
      <label htmlFor="age">Age:</label>
      <input
        type="age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
        className="px-2 py-2 rounded-xl my-2"
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="phone"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        className="px-2 py-2 rounded-xl my-2"
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="px-2 py-2 rounded-xl my-2"
      />
      <button
        className="rounded-xl bg-black text-white py-2 my-2"
        disabled={isLoading}
      >
        Sign up
      </button>
      {error && (
        <div className="border-red-500 text-red-500 border-2 my-[10px] mx-0 rounded-xl p-2.5 bg-red-200 w-full font-bold">
          {error}
        </div>
      )}
    </form>
  );
};

export default Signup;
