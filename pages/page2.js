import React, { Component } from 'react'
import Router from 'next/router';
import { callApi } from '../src/api';
import Error from './_error';


export default class page2 extends Component {

    static async getInintialProps({ query, req }) {
        // throw new Error('exception in getInitialProps');
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
        const text = query.text || 'none';
        const data = await callApi();
        return { text, data, userAgent};
    }

    onClick = () => {
        Router.push('/page1');
    }

    render() {
        const { text, data, userAgent } = this.props;
        
        return (
            <div>
                {/* <button onClick={this.onClick}>page 1으로 </button> */}
                <p>page 2</p>
                <p>{`text: ${text}`}</p>
                <p>{`data is ${data}`}</p>
                <p>{`userAgent is ${userAgent}`}</p>
            </div>
        )
    }
}
