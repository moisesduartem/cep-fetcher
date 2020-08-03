import React, { Component } from 'react';
import Button from '../../components/Button';
import Feed from '../../components/Feed';
import './styles.css'; 

class Main extends Component {

    state = {};

    render() {

        return (<Feed>
            <div className="title-box">
                <h1>Bem-vindo(a)!</h1>
            </div>
            <h2>Buscar endereço por:</h2>
            <div id="button-list">
                <Button to="/cep/">CEP</Button>
                <Button to="">Outros dados</Button>
            </div>
        </Feed>);
    }
}

export default Main;