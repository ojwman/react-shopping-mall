import React, { Component } from "react";
import gStore from "../../store";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginYN: gStore.getState().loginYN
    };
    gStore.subscribe(() => {
      console.log("User gStore값 변경");
      this.setState({
        loginYN: gStore.getState().loginYN
      });
    });
  }
  render() {
    if (this.state.loginYN === "Y") {
      return (
        <div className="text-center">
          {/* <Link
            id="mypageBtn"
            className={"btn btn-default"}
            to="/mypage/basic-info"
          >
            마이페이지
          </Link> */}
          <button
            type="button"
            className="btn btn-default"
            onClick={function() {
              var token = window.localStorage.getItem("jwt-token");

              var oOption = {
                headers: {
                  "jwt-token": token
                }
              };

              fetch("/user/jwt-auth/myinfo/ojw", oOption)
                .then(res => {
                  alert(res.status);

                  if (res.status === 200) {
                    res.text().then(text => {
                      alert(text);
                    });
                  } else if (res.status === 401) {
                    res.text().then(text => {
                      alert(text);
                    });
                  } else {
                    res.text().then(text => {
                      alert(text);
                    });
                  }
                })
                .catch(err => alert(err));
            }}
          >
            마이페이지
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={function() {
              window.localStorage.removeItem("jwt-token");
              alert("로그아웃 되었습니다.");
              gStore.dispatch({ type: "LOGIN", jwt_token: "N" });
            }}
          >
            로그아웃
          </button>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default User;
