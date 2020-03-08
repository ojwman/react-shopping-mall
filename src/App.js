import React, { Component } from "react";
import Top from "./components/Top";
import User from "./components/User/User";
import SearchBox from "./components/SearchBox";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Shop from "./components/Shop";
import MyPage from "./components/MyPage/MyPage";
import UserController from "./components/UserController";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }
  render() {
    console.log("App render");
    return (
      <div className="container-fluid">
        <Router>
          <div className="col-md-12">
            <Top title="Shopping Mall" sub="with react"></Top>
            <User></User>
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
            <Menu></Menu>
            <article>
              <Route exact path="/" component={Main} />
              <Route path="/shop/:name" component={Shop} />
              <Route path="/mypage/:name" component={MyPage} />
              <Route path="/user/:name" component={UserController} />
            </article>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
