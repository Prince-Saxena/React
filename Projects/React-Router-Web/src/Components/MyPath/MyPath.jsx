import React from "react";
import { useParams } from "react-router-dom";

export default function MyPath() {
  const { userid } = useParams();
  return (
    <div className="animate-pulse bg-blue-500 text-white font-bold italic text-lg">
      {userid}
    </div>
  );
}
