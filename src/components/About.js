import Profile from "./ProficeClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";
const About2 = function () {
  return (
    <div>
      <Profile name={"Kshitiz"} dob={"13/04/2000"} />
      <h1>This is About Page</h1>
      <h2>Happy to see you here</h2>
    </div>
  );
};
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent - Constructor");
  }
  componentDidMount() {
    console.log("Parent - ComponentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("Parent - Render");

    return (
      <div className="p-10 text-center  min-h-screen">
        <Profile name={"Kshitiz"} dob={"13/04/2000"} />
        <h1 className="p-2 font-bold">This is About Page</h1>
        <h2 className="p-2 font-bold">Happy to see you here</h2>
        <UserContext.Consumer>
          {({ user }) => (
            <h1 className="p-2 font-bold">
              {user.name} - {user.email}
            </h1>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default About;
