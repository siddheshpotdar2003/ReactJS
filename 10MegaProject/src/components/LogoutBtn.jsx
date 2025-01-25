import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice.js";
import authService from "../appwrite/auth.js";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService
      .logoutUser()
      .then(() => dispatch(logout))
      .catch((error) => console.log(error));
  };

  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
