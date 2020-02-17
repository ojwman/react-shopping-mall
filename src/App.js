import React, { Component } from "react";
import "./App.css";
import "./w3.css";
import Top from "./components/Top";
import SearchBox from "./components/SearchBox";
import Main from "./components/Main";
import Shop from "./components/Shop";
import MyPage from "./components/MyPage/MyPage";
import { BrowserRouter, Link, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  render() {
    console.log("App render", this);
    return (
      <BrowserRouter>
        <div className="root">
          <Top title="Shopping Mall" sub="with react"></Top>
          <SearchBox
            onSetValue={value => {
              // alert(value);
              // window.location.href = "http://localhost:3000/shop/item-list";
              // window.location.href = "/shop/item-list?keyword=" + value;
              this.setState({
                keyword: value
              });
              // window.setTimeout(function() {
              //   document.getElementById("link-item-list").click();
              // }, 0);
            }}
          />
          <nav className="w3-bar w3-blue">
            <Link
              className="w3-bar-item w3-button"
              to={"/shop/item-list?keyword=" + this.state.keyword}
              id="link-item-list"
            >
              아이템 리스트
            </Link>
            &nbsp;
            <Link className="w3-bar-item w3-button" to="/shop/basket">
              장바구니
            </Link>
            &nbsp;
            <Link className="w3-bar-item w3-button" to="/mypage/basic-info">
              마이페이지
            </Link>
            &nbsp;
          </nav>
          <article className="w3-container">
            <Route exact path="/" component={Main} />
            <Route path="/shop/:name" component={Shop} />
            <Route path="/mypage/:name" component={MyPage} />
          </article>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
