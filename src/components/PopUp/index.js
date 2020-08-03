import React, { Component } from 'react';
import './styles.css';

class PopUp extends Component {

    render() {
        return (<div style={{ visibility: this.props.visibility }} className="pop-up">
            {this.props.children}
        </div>);
    }
}

export default PopUp;