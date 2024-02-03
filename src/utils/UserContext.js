import { createContext } from "react";
const UserContext = createContext({
  user: {
    name: "Kshitiz Sharma",
    email: "kshitizsharma405@gmail.com",
  },
});
UserContext.displayName = "UserContext";
export default UserContext;
