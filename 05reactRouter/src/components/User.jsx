import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <div className="flex-1 bg-gray-600 text-white text-3xl p-4">User: {id}</div>
  );
};

export default User;
