import React, { Component } from "react";

class Login extends Component {
  render() {
    console.log("Login render");
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="loginId" className="col-sm-2 control-label">
            ID
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="loginId"
              placeholder="ID"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="loginPassword" className="col-sm-2 control-label">
            PW
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="loginPassword"
              placeholder="Password"
            />{" "}
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button
              className="btn btn-default"
              onClick={() => {
                this.login();
              }}
            >
              로그인
            </button>
          </div>
        </div>
      </form>
    );
  }

  login() {
    var oData = {
      id: document.getElementById("loginId").value,
      password: document.getElementById("loginPassword").value
    };
    const formData = new URLSearchParams();
    formData.append("id", oData.id);
    formData.append("password", oData.password);
    var oOption = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      //mode: "cors", // no-cors, cors, *same-origin
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formData
      //body: JSON.stringify(oData) // body data type must match "Content-Type" header
    };
    fetch(process.env.REACT_APP_BACKEND_API_URL + "/user/login", oOption)
      .then(res => {
        if (res.status === 200) {
          res.text().then(text => {
            var oResult = JSON.parse(text);

            if (oResult.bUser === true) {
              alert("is User");

              var token = res.headers.get("token");
              window.localStorage.setItem("token", token);
            } else {
              alert("no User");
            }
          });
        } else {
          alert(res.statusText);
        }
      })
      .catch(err => alert(err));
  }
}

export default Login;
