import React, { Component } from 'react'
import Router from 'next/router';
import { callApi } from '../src/api';


export default class page2 extends Component {

    static async getInintialProps({ query }) {
        const text = query;
        const data = await callApi();
        return { text, data};
    }

    onClick = () => {
        Router.push('/page1');
    }

    render() {
        const { text, data } = this.props;
        
        return (
            <div>
                <button onClick={this.onClick}>page 1으로 </button>
                <p>page 2</p>
                <p>{`text: ${text}`}</p>
                <p>{`data is ${data}`}</p>
            </div>
        )
    }
}
