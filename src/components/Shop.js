import React, { Component } from "react";
import ItemList from "./Shop/ItemList";
import Basket from "./Shop/Basket";
import ItemDetail from "./Shop/ItemDetail";
import NotFound from "./Error/NotFound";

class Shop extends Component {
  render() {
    console.log("Shop render");
    var name = this.props.match.params.name;

    if (name === "item-list") {
      return <ItemList />;
    } else if (name === "basket") {
      return <Basket />;
    } else if (name === "item-detail") {
      return <ItemDetail />;
    } else {
      return <NotFound />;
    }
  }
}

export default Shop;
