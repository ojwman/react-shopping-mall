import React, { Component } from "react";
import Top from "./components/Top";
import SearchBox from "./components/SearchBox";
import Main from "./components/Main";
import Shop from "./components/Shop";
import MyPage from "./components/MyPage/MyPage";
import User from "./components/User";
import { BrowserRouter, Link, Route } from "react-router-dom";

//import "./w3.css";
//import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

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
        <Link className="" to="/user/login">
          로그인
        </Link>
        <div className="container">
          <div className="col-md-12">
            <Top title="Shopping Mall" sub="with react"></Top>
          </div>
          <div className="col-md-12">
            <SearchBox
              onSetValue={value => {
                // alert(value);
                this.setState({
                  keyword: value
                });
              }}
            />
          </div>
          <div className="col-md-12">
            <nav className="navbar navbar-default">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">
                  Brand
                </a>
              </div>

              <ul className="nav navbar-nav">
                <li>
                  <Link
                    className="w3-bar-item w3-button"
                    to={"/shop/item-list?keyword=" + this.state.keyword}
                    id="link-item-list"
                  >
                    아이템 리스트
                  </Link>
                </li>
                <li>
                  <Link className="w3-bar-item w3-button" to="/shop/basket">
                    장바구니
                  </Link>
                </li>
                <li>
                  <Link
                    className="w3-bar-item w3-button"
                    to="/mypage/basic-info"
                  >
                    마이페이지
                  </Link>
                </li>
              </ul>
            </nav>
            <article className="w3-container">
              <Route exact path="/" component={Main} />
              <Route path="/shop/:name" component={Shop} />
              <Route path="/mypage/:name" component={MyPage} />
              <Route path="/user/:name" component={User} />
            </article>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
