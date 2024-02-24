import { createContext } from "react";
const UserContext = createContext({
  user: {
    name: "",
    email: "",
  },
});

UserContext.displayName = "UserContext";
export default UserContext;
