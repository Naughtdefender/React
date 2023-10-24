import { Outlet } from "react-router-dom";
import Profile from "./ProficeClass";
import { Component } from "react";
const About2 = function () {
  return (
    <div>
      <h1>This is About Page</h1>
      <h2>Happy to see you here</h2>
      <Profile name={"Kshitiz"} dob={"13/04/2000"} />
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
  render() {
    console.log("Parent - Render");
    return (
      <div>
        <h1>This is About Page</h1>
        <h2>Happy to see you here</h2>
        <Profile name={"Kshitiz"} dob={"13/04/2000"} />
      </div>
    );
  }
}

export default About;
