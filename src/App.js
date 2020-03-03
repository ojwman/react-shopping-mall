import React, { Component } from "react";
import Top from "./components/Top";
import SearchBox from "./components/SearchBox";
import Main from "./components/Main";
import Shop from "./components/Shop";
import MyPage from "./components/MyPage/MyPage";
import User from "./components/User";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import gStore from "./store";

//import "./w3.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      navCollapsed: true,
      loginYN: window.localStorage.getItem("token")
    };
    gStore.subscribe(() => {
      console.log("gStore값 변경");
      this.setState({
        loginYN: gStore.getState().loginYN
      });
      console.log("loginYN", this.state.loginYN);
    });
  }
  _onToggleNav = () => {
    this.setState({ navCollapsed: !this.state.navCollapsed });
  };
  render() {
    console.log("App render");
    const { navCollapsed } = this.state;
    return (
      <div className="container-fluid">
        <Router>
          <div className="col-md-12">
            <Top title="Shopping Mall" sub="with react"></Top>
          </div>
          <div className="col-md-12">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <SearchBox
                onSetValue={value => {
                  this.setState({
                    keyword: value
                  });
                }}
              />
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="col-md-12">
            <nav className="navbar navbar-default">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  onClick={this._onToggleNav}
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">
                  Brand
                </Link>
              </div>
              <div
                className={
                  (navCollapsed ? "collapse" : "") + " navbar-collapse"
                }
              >
                <ul className="nav navbar-nav">
                  <li>
                    <Link
                      to={"/shop/item-list?keyword=" + this.state.keyword}
                      id="link-item-list"
                    >
                      아이템 리스트
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop/basket">장바구니</Link>
                  </li>
                  <li>
                    <Link to="/mypage/basic-info">마이페이지</Link>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link
                      id="loginBtn"
                      className={
                        (this.state.loginYN === "Y" ? "hidden" : "show") +
                        " btn btn-default"
                      }
                      to="/user/login"
                      style={{ padding: "10px", margin: "4px" }}
                    >
                      로그인
                    </Link>
                    <Link
                      id="mypageBtn"
                      className={
                        (this.state.loginYN === "Y" ? "show" : "hidden") +
                        " btn btn-default"
                      }
                      to="/mypage/basic-info"
                      style={{
                        padding: "10px",
                        margin: "4px",
                        display: "none"
                      }}
                    >
                      마이페이지
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <article className="w3-container">
              <Route exact path="/" component={Main} />
              <Route path="/shop/:name" component={Shop} />
              <Route path="/mypage/:name" component={MyPage} />
              <Route path="/user/:name" component={User} />
            </article>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
