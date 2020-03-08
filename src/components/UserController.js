import React, { Component } from "react";
import Login from "./User/Login";
import BasicInfo from "./MyPage/MyPage";
import NotFound from "./Error/NotFound";
import gStore from "../store";
import { withRouter } from "react-router-dom";

class UserController extends Component {
  render() {
    console.log("UserController render");
    var name = this.props.match.params.name;
    const loginYN = gStore.getState().loginYN;

    switch (name) {
      case "login":
        if (loginYN !== "Y") {
          return <Login />;
        } else {
          return <BasicInfo />;
        }
      default:
        return <NotFound />;
    }
  }
}

export default withRouter(UserController);
