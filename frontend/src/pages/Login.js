import React, { useState } from "react";

import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="max-w-[500px] mx-auto rounded-2xl my-10 bg-[#ED4D6E] p-3 font-bold">
      <h1 className="text-center text-2xl">Log in</h1>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
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
      <button className="rounded-xl bg-black text-white py-2 my-2">
        Log in
      </button>
      <span>
        Don't have an account{" "}
        <Link to="/signup" className=" font-light underline">
          Signup?
        </Link>
      </span>
    </form>
  );
};

export default Login;
