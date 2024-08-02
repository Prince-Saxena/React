import React from "react";
import UserContext from "./UserContext";
import { useContext } from "react";

export default function Profile() {
  const { user } = useContext(UserContext);
  return <div>Welcome : {user}</div>;
}
