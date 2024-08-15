import React from "react";
import UserContext from "./UserContext";
import { useContext } from "react";
import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const { setUser } = useContext(UserContext);
  const handle = (e) => {
    e.preventDefault();
    setUser(name);
  };
  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        className="text-orange-400"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handle}>enter</button>
    </>
  );
}
