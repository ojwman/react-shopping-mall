import React, { Component } from 'react';

class SearchBox extends Component {
    render() {
      console.log('Subject render');
      return (
        <div className="w3-container w3-padding-16">
          {/* <label className="w3-text-blue">검색어</label> */}
          <input 
            type="text" 
            className="w3-input w3-border w3-round"
            style={{width: "calc(100% - 68px)", display: "inline"}}
            onKeyPress={
                (e) => {
                    if(e.charCode === 13) {
                        var value = e.target.value;
                        if (! value) {
                            alert("검색어를 입력하세요.");
                            return;
                        }
                        this.props.onGetValue(value);
                    }
            }} 
            />
          &nbsp;
          <button className="w3-button w3-round w3-blue" style={{marginBottom: "4px"}}>검색</button>
        
        </div>
      );
    }
  }

export default SearchBox;