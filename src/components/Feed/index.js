import React, { Component } from 'react';


export default class Feed extends Component {

    styles = {
        maxWidth: '700px',
        margin: '20px auto 0',
        padding: '20px',
        backgroundColor: 'white',
        border: '2px solid #DDD',
        borderRadius: '10px',
    }

    render() {
        return (
            <div style={this.styles}>
                {this.props.children}
            </div>
        );
    }
}