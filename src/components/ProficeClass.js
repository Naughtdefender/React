import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child - constructor");
    this.state = {
      userInfo: {
        name: "dummy name",
        location: "dummy location",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Naughtdefender");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("Child - componentDidMount", this.props.name);
    console.log(json);
  }
  render() {
    console.log("Child - render");
    const { userInfo } = this?.state;
    return (
      <div className="text-center">
        <img
          className=" m-auto p-8 rounded-full h-72 "
          src={userInfo.avatar_url}
          alt="userImage"
        />
        <h2 className="p-2 font-bold">This is Profile Class.</h2>
        <h2 className="p-2 font-bold">My name is {userInfo?.name}</h2>
        <h2 className="p-2 font-bold">Location - {userInfo?.location}</h2>
      </div>
    );
  }
}

export default Profile;
