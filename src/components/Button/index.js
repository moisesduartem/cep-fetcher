import React, { Component } from 'react';
import './styles.css';

class Button extends Component {
    render() {
        return (
        <button>{this.props.label}</button>
        )
    }
}

export default Button;