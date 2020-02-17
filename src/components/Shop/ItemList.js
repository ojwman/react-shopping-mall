import React, { Component } from "react";
import { HashRouter, Link, Route } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import AskToAdmin from "../Error/AskToAdmin";

class ItemList extends Component {
  render() {
    console.log("ItemList render");

    // var oParams = new URLSearchParams(this.props.location.search.slice(1));
    var oParams = new URLSearchParams(window.location.search.slice(1));
    var keyword = oParams.get("keyword");
    //keyword가 없어도 아이템 리스트는 뿌려줘야 함
    // if (!keyword) {
    //   return <AskToAdmin />;
    // }

    var aLink = [];
    aLink.push(
      <Link className="test" to="/shop/item-detail?id=1" key={1}>
        아이템 디테일 1번상품&nbsp;&nbsp;&nbsp;
      </Link>
    );

    aLink.push(
      <Link className="test" to="/shop/item-detail?id=2" key={2}>
        아이템 디테일 2번상품
      </Link>
    );

    return <nav className="w3-padding-16">{aLink}</nav>;
  }
}

export default ItemList;
