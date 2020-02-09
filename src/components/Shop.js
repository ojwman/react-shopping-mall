import React, { Component } from 'react';
import ItemList from './Shop/ItemList';
import Basket from './Shop/Basket';
import NotFound from './Error/NotFound';

class Shop extends Component {
    render() {
        var name = this.props.match.params.name;
        if (name === "item-list") {
            return <ItemList />;
        } else if(name === "basket") {
            return <Basket />;
        } else {
            return (
                <NotFound />
            );
        }
    }
}

export default Shop;