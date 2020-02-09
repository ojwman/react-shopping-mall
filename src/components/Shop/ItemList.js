import React, { Component } from 'react';
import { HashRouter, Link, Route } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import AskToAdmin from '../Error/AskToAdmin';

class ItemList extends Component {
    render() {
      console.log('ItemList render');
      
      // var oParams = new URLSearchParams(this.props.location.search.slice(1));
      var oParams = new URLSearchParams(window.location.search.slice(1));
      var keyword = oParams.get("keyword");
      if (! keyword) {
        return <AskToAdmin />;
      }

      var aLink = [];
      aLink.push((<Link className="test" to="/shop/item-detail?id=1">&nbsp;아이템 디테일 1번상품</Link>));
      aLink.push((<br />));aLink.push((<br />));
      aLink.push((<Link className="test" to="/shop/item-detail?id=2">&nbsp;아이템 디테일 2번상품</Link>));
      aLink.push((<br />));aLink.push((<br />));

      return (
        <HashRouter>
            <nav className="w3-padding-16">
                {/* <Link className="test" to="/shop/item-detail?id=1">아이템 디테일 1번상품</Link> <br /><br />
                <Link className="test" to="/shop/item-detail?id=2">아이템 디테일 2번상품</Link> <br /><br /> */}
                {aLink}
            </nav>
            <article>
                <Route path="/shop/item-detail" component={ItemDetail} />
            </article>
        </HashRouter>
      );
    }
  }

export default ItemList;