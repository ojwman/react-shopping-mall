import React, { Component } from "react";
import Top from "./components/Top";
import SearchBox from "./components/SearchBox";
import Menu from "./Menu";
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
      keyword: ""
    };
  }
  _onToggleNav = () => {
    this.setState({ navCollapsed: !this.state.navCollapsed });
  };
  render() {
    console.log("App render");
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
            <Menu></Menu>
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
