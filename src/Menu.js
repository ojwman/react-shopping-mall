import React, { Component } from "react";
import { Link } from "react-router-dom";
import gStore from "./store";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    console.log("Menu render");
    const { navCollapsed } = this.state;
    return (
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
        <div className={(navCollapsed ? "collapse" : "") + " navbar-collapse"}>
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
    );
  }
}

export default Menu;
