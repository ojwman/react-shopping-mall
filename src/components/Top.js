import React, { Component } from "react";
import { Link } from "react-router-dom";
class Top extends Component {
  render() {
    console.log("Top render");
    return (
      <header className="w3-display-container" style={{ height: "100px" }}>
        <Link to="/">
          <h1 className="w3-display-topmiddle">{this.props.title}</h1>
          <h6 className="w3-display-bottommiddle">{this.props.sub}</h6>
        </Link>
      </header>
    );
  }
}

export default Top;
