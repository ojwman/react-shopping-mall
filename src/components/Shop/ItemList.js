import React, { Component } from "react";
import { Link } from "react-router-dom";
//import AskToAdmin from "../Error/AskToAdmin";

class ItemList extends Component {
  render() {
    console.log("ItemList render");

    // var oParams = new URLSearchParams(this.props.location.search.slice(1));
    //var oParams = new URLSearchParams(window.location.search.slice(1));

    //keyword가 없어도 아이템 리스트는 뿌려줘야 함
    //var keyword = oParams.get("keyword");
    // if (!keyword) {
    //   return <AskToAdmin />;
    // }

    var aLink = [];
    var goToLinkUrl = "";
    for (var i = 0; i < 4; i++) {
      goToLinkUrl = "/shop/item-detail?id=" + i;
      aLink.push(
        <div className="col-sm-6 col-md-4" key={i}>
          <div className="thumbnail">
            <img src="/images/shortT.png" alt="상품이미지" />
            <div className="caption">
              <h3>상품 {i}</h3>
              <p>가격 :{i}원</p>
              <p>
                <Link className="btn btn-primary" to={goToLinkUrl} key={i + 1}>
                  아이템 디테일 {i + 1}번상품
                </Link>{" "}
                <Link className="btn btn-primary" to="" key={i + 10}>
                  찜
                </Link>
              </p>
            </div>
          </div>
        </div>
      );
    }
    return (
      <nav className="w3-padding-16">
        <div className="row">{aLink}</div>
      </nav>
    );
  }
}

export default ItemList;
