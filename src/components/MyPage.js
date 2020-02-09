import React, { Component } from 'react';
import BasicInfo from './MyPage/BasicInfo';
import Basket from './Shop/Basket';
import NotFound from './Error/NotFound';

class MyPage extends Component {
    render() {
        var name = this.props.match.params.name;
        if (name === "basic-info") {
            return <BasicInfo />;
        } else {
            return (
                <NotFound />
            );
        }
    }
}

export default MyPage;