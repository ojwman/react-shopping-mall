import React, { Component } from "react";
import { Link } from "react-router-dom";
//import AskToAdmin from "../Error/AskToAdmin";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentWillMount() {
    fetch(
      process.env.REACT_APP_BACKEND_API_URL +
        "/item/category/" +
        "pants" +
        "/limitFrom/" +
        "0" +
        "/limitCount/" +
        "6"
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          items: data
        })
      )
      .catch(err => alert(err));
  }
  render() {
    console.log("ItemList render");
    // var oParams = new URLSearchParams(this.props.location.search.slice(1));
    //var oParams = new URLSearchParams(window.location.search.slice(1));

    //keyword가 없어도 아이템 리스트는 뿌려줘야 함
    //var keyword = oParams.get("keyword");
    // if (!keyword) {
    //   return <AskToAdmin />;
    // }

    const { items } = this.state;
    const itemList = items.map(idx => (
      <div className="col-sm-6 col-md-4" key={idx.id}>
        <div className="thumbnail">
          <img src={idx.thumbnail} alt="상품이미지" />
          <div className="caption">
            <h3>상품명 : {idx.name}</h3>
            <p>가격 : {idx.price}원</p>
            <p>
              <Link
                className="btn btn-primary"
                to={"/shop/item-detail?id=" + idx.id}
                key={idx.id + 1}
              >
                아이템 디테일 {idx.id}번상품
              </Link>{" "}
              <Link className="btn btn-primary" to="/" key={idx.id + 10}>
                찜
              </Link>
            </p>
          </div>
        </div>
      </div>
    ));
    return <div className="row">{itemList}</div>;
  }
}

export default ItemList;
