import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="min-h-screen p-6 text-center">
      <h1 className="font-bold">{user.name}</h1>
      <p className=" font-semibold">{user.email}</p>
    </div>
  );
};

export default Contact;
