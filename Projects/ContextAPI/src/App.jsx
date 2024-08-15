import { useState } from "react";
import UserContextProvider from "./components/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  return (
    <UserContextProvider>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  );
}

export default App;
