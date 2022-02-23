import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const isAuth = localStorage.getItem("token");
  return (
    <div style={{ marginTop: "200px" }}>
      <h1>{user?.isAdmin ? "true" : "false"}</h1>
    </div>
  );
};

export default Profile;
