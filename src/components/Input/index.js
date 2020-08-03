import React, { Component } from 'react';
import './styles.css';

class Input extends Component {
    
    render() {
        return (<input onChange={this.props.onChange} type={this.props.type} placeholder={this.props.placeholder}>
            {this.props.children}
        </input>);
    }
};

export default Input;