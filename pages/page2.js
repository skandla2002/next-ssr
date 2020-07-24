import React, { Component } from 'react'
import Router from 'next/router';

export default class page2 extends Component {

    onClick = () => {
        Router.push('/page1');
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick}>page 1으로 </button>
                <p>page 2</p>
            </div>
        )
    }
}
