import React, { Component } from "react";
import { Link } from "react-router-dom";
//import AskToAdmin from "../Error/AskToAdmin";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      limitFrom: 0,
      limitCount: 2
    };
  }

  UNSAFE_componentWillMount() {
    console.log("UNSAFE_componentWillMount");
    this.pagingItemList();
    // 스크롤 이벤트 적용
    window.addEventListener("scroll", this.onScroll);
  }

  onScroll = e => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    var setScrollTiemout = "";
    // IE에서는 document.documentElement 를 사용.
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    // 스크롤링 했을때, 브라우저의 가장 밑에서 50정도 높이가 남았을때에 실행하기위함.
    if (scrollHeight - innerHeight - scrollTop < 50) {
      console.log("Almost Bottom Of This Browser : ", e);
      // 스크롤링 이벤트 제거
      window.removeEventListener("scroll", this.onScroll);
      setScrollTiemout = setTimeout(
        function() {
          this.pagingItemList();
        }.bind(this),
        30
      );
      //this.pagingItemList();
    }
  };

  pagingItemList() {
    var status = "";
    fetch(
      process.env.REACT_APP_BACKEND_API_URL +
        "/item/category/" +
        "pants" +
        "/limitFrom/" +
        this.state.limitFrom +
        "/limitCount/" +
        this.state.limitCount
    )
      .then(res => {
        status = res.status;
        if (res.status === 200) {
          res.json().then(data => {
            this.setState({
              items: this.state.items.concat(data),
              limitFrom: this.state.limitFrom + 2,
              limitCount: this.state.limitCount
            });
          });
        }
      })
      .then(() => {
        if (status === 200) {
          // 스크롤 이벤트 적용
          window.addEventListener("scroll", this.onScroll);
        } else {
          console.log(status, ": 더 이상 그릴 수 없습니다.");
        }
      })
      .catch(err => alert(err));
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    // 언마운트 될때에, 스크롤링 이벤트 제거
    window.removeEventListener("scroll", this.onScroll);
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
                아이템 {idx.id}번상품
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
