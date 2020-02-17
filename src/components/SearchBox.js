import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SearchBox extends Component {
  render() {
    console.log("SearchBox render");
    return (
      <div className="w3-container w3-padding-16">
        {/* <label className="w3-text-blue">검색어</label> */}
        <input
          type="text"
          className="w3-input w3-border w3-round"
          style={{ width: "calc(100% - 68px)", display: "inline" }}
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
        &nbsp;
        <button
          className="w3-button w3-round w3-blue"
          style={{ marginBottom: "4px" }}
        >
          검색
        </button>
      </div>
    );
  }
}

export default withRouter(SearchBox);
