import React, { Component } from 'react';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    render() {
        return (<header id="main-header">
            <h2><FontAwesomeIcon icon={faHome} /> CEP Fetcher</h2>
        </header>);
    }
}

export default Header;