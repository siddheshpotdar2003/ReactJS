import React, { useContext } from "react";
import UserContext from "./Context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <h2>please login</h2>;
  }
  return <h2>Hi {user.username}</h2>;
};

export default Profile;
