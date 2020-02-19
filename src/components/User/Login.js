import React, { Component } from 'react';

class Login extends Component {
    render() {
      console.log('Login render');
      
      return (
        <article className="w3-container w3-padding-16">
          ID: <input id="loginId" /> &nbsp;
          PW: <input id="loginPassword" /> &nbsp;
            <button onClick={() => {
                this.login();
            }}>로그인</button>
        </article>
      );
    }

    login() {
        var oData = {
            id: document.getElementById("loginId").value,
            password: document.getElementById("loginPassword").value
        };
        
        var oOption = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(oData), // body data type must match "Content-Type" header
        };
        
        fetch('http://localhost:9090/user/login', oOption).then((res) => {
            if (res.status === 200) {
                res.text().then((text) => {
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
        }).catch(err => alert(err));
    }
  }

export default Login;