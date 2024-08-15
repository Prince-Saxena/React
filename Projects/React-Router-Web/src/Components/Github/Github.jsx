import React from "react";
import { useLoaderData } from "react-router-dom";
export default function Github() {
  const data = useLoaderData();
  return (
    <div
      style={{ backgroundImage: `url(${data.avatar_url})` }}
      className="h-96"
    >
      {data.followers}
    </div>
  );
}

export const Gitinfo = async () => {
  const res = await fetch("https://api.github.com/users/Prince-Saxena");
  return res.json();
};
