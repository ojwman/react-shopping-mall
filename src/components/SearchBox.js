import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SearchBox extends Component {
  render() {
    console.log("SearchBox render");
    return (
      <div
        className="center-block"
        style={{ width: "740px", marginBottom: "10px" }}
      >
        <div className="input-group ">
          {/* <label className="w3-text-blue">검색어</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Search for..."
            onKeyPress={function(e) {
              if (e.charCode === 13) {
                var value = e.target.value;
                if (!value) {
                  alert("검색어를 입력하세요.");
                  return;
                }
                this.props.onSetValue(value);
                this.props.history.push("/shop/item-list?searchStr=" + value);
                debugger;
              }
            }.bind(this)}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-default"
              //style={{ marginBottom: "4px" }}
            >
              검색
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBox);
