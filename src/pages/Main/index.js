import React, { Component } from 'react';
import Button from '../../components/Button';
import './styles.css'; 

class Main extends Component {
    render() {
        return (<div id="main">
            <div className="title-box">
                <h1>Bem-vindx!</h1>
            </div>

            <h2>Buscar endereço por:</h2>
            <Button label="CEP"/>
            <Button label="Formulário" />


        </div>);
    }
}

export default Main;