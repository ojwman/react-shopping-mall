import React, { Component } from "react";
import Login from "./User/Login";
import NotFound from "./Error/NotFound";

class User extends Component {
  render() {
    console.log("User render");
    var name = this.props.match.params.name;
    if (name === "login") {
      return <Login />;
    } else {
      return <NotFound />;
    }
  }
}

export default User;
