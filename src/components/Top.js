import React, { Component } from "react";
import { Link } from "react-router-dom";
class Top extends Component {
  render() {
    console.log("Top render");
    return (
      <header className="page-header text-center">
        <Link to="/">
          <h1 className="">{this.props.title}</h1>
          <h3 className="">{this.props.sub}</h3>
        </Link>
      </header>
    );
  }
}

export default Top;
