import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(username, password);
  };

  return (
    <form
      className="max-w-[500px] mx-auto rounded-2xl my-10 bg-[#ED4D6E] p-3 font-bold"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center text-2xl">Log in</h1>
      <label htmlFor="usernama">Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
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
        Log in
      </button>
      {error && (
        <div className="border-red-500 text-red-500 border-2 my-[20px] mx-0 rounded p-2.5 bg-white w-full">
          {error}
        </div>
      )}
    </form>
  );
};

export default Login;
