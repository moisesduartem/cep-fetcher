import React, { Component } from 'react';
import './styles.css';

class Submit extends Component {
    render() {
        return (
        <button type="submit" style={{ textDecoration: 'none' }} to={this.props.to}>
            {this.props.children}
        </button>);
    }
}

export default Submit;