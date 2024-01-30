import { createContext } from "react";
const UserContext = createContext({
  user: {
    name: "Kshitiz Sharma",
    email: "kshitizsharma405@gmail.com",
  },
});
export default UserContext;
