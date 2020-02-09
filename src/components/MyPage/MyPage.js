import React, { Component } from 'react';

class BasicInfo extends Component {
    render() {
        console.log('BasicInfo render');
        
        return (
            <article className="w3-container w3-padding-16">
                마이페이지 기본 정보를 개발하세요.
            </article>
        );
    }
}

export default BasicInfo;