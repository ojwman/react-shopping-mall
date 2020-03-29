import React, { Component } from "react";

class Main extends Component {
  render() {
    console.log("Main Render");
    return (
      <div className="col-md-12">
        <div className="jumbotron">
          <h1>Hello, React!</h1>
          <p>리액트 스터디를 위한 쇼핑몰웹페이지 제작</p>
          <p>React 깃헙 주소 : https://github.com/ojwman/react-shopping-mall</p>
          <p>
            SpringBoot 깃헙 주소 : https://github.com/ojwman/sbp-shopping-mall
          </p>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="thumbnail">
              <img src="/images/ojwImg.jpeg" alt="사진" />
              <div className="caption">
                <h3>오재원(Web SI Developer)</h3>
                <p>e-mail : ohjae8851@naver.com</p>
                {/* <p>
                  안녕하세요. 저는 콜센터 SI업체에서 4년간 근무한 경력을 보유한
                  웹개발자입니다. 잘 부탁드립니다.
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="thumbnail">
              <img src="/images/lsmImg.jpeg" alt="사진" />
              <div className="caption">
                <h3>이소미(Web SI Developer)</h3>
                <p>e-mail : 122369@naver.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
