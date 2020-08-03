import React, { Component } from 'react';
import Button from '../../components/Button';
import './styles.css'; 

class byCep extends Component {

    state = {};

    render() {

        return (<div id="main">
            <form>
                <input type="text" placeholder="Bla bla" />
            </form>
            <Button>Voltar</Button>
        </div>);
    }
}

export default byCep;