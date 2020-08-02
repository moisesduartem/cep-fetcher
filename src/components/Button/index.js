import React, { Component } from 'react';
import './styles.css';

class Button extends Component {
    render() {
        return (
        <button>{this.props.icon}<span>{this.props.children}</span></button>
        )
    }
}

export default Button;