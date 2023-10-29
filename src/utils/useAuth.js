import { useState, useEffect } from "react";

const useAuth = (param) => {
  const [logIn, setLogIn] = useState(param);
  const toggleLogIn = () => setLogIn((prevLogIn) => !prevLogIn);
  useEffect(() => setLogIn(!logIn), []);
  return [logIn, toggleLogIn];
};

export default useAuth;
