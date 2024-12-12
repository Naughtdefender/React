import React, { useContext, useEffect, useState } from "react";
import UserContext from "../utils/UserContext";

const LoginPage = ({ login, setLogin }) => {
  const { user, setUser } = useContext(UserContext);
  const [validUsername, setValidUsername] = useState({
    name: false,
    email: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(user));

    console.log("Clicked");
    console.log(user);
    if (user.name === "guest" || user.name === "") {
      setLogin(true);
      const timeout = setTimeout(() => {
        setValidUsername({
          ...validUsername,
          name: true,
        });
      }, 3000);
      setValidUsername(true);
      return () => clearTimeout(timeout);
    } else if (user.email === "") {
      setLogin(true);
      const timeout = setTimeout(() => {
        setValidUsername({
          ...validUsername,
          email: true,
        });
      }, 3000);
      setValidUsername(true);
      return () => clearTimeout(timeout);
    } else {
      return setLogin(!login);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <section
      className={
        " absolute sm:top-96 sm:right-52 border rounded-md py-2 lg:right-8 lg:top-16 bg-slate-300"
      }
    >
      {validUsername.name && (
        <h1 className="bg-red-300 text-center  text-white">
          enter valid username
        </h1>
      )}
      {validUsername.email && (
        <h1 className="bg-red-300 text-center  text-white">
          enter valid email
        </h1>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label
          htmlFor="text"
          className="text-center flex flex-col m-2 text-red-800"
        >
          Enter name
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={user.name}
            placeholder="enter your name"
            className="m-2 border rounded-md p-1"
          />
        </label>
        <label htmlFor="text" className="text-center m-2 text-red-800">
          Enter email
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="enter your email"
            className="m-2 w-60 flex flex-col p-1  border rounded-md"
          />
        </label>
        <button
          type="submit"
          className="border-none rounded-md m-auto  px-2 py-1 bg-green-400 text-white"
        >
          submit
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
