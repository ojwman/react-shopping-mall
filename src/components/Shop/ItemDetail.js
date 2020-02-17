import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ItemDetail extends Component {
  render() {
    console.log("ItemDetail render");

    var oParams = new URLSearchParams(this.props.location.search.slice(1));
    var id = oParams.get("id");

    return (
      <header>
        <h1>ItemDetail {id} 번 상품</h1>
      </header>
    );
  }
}

export default withRouter(ItemDetail);
