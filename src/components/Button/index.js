import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Button extends Component {
    render() {
        return (
        <Link style={this.props.style} disabled={this.props.disabled}  to={this.props.to}>
            {this.props.children}
        </Link>);
    }
}

export default Button;