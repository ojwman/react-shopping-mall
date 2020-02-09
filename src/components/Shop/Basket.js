import React, { Component } from 'react';

class Basket extends Component {
    render() {
      console.log('Basket render');
      
      return (
        <article className="w3-container w3-padding-16">
          장바구니를 개발하세요.
        </article>
      );
    }
  }

export default Basket;