import React, { Component } from 'react';

import Button from '../../components/Button';
import Submit from '../../components/Submit';
import Feed from '../../components/Feed';
import Input from '../../components/Input';

import './styles.css'; 

import api from '../../services/api';

class byCep extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = { 
        cep: '',
        adress: {} 
    };

    loadAdress = async () => {
        const response = await api.get(`/${this.state.cep}/json/`, { method: 'HEAD' ,mode: 'no-cors' });
        const data = await response.data;
        this.setState({ adress: data });
    };

    handleChange(event) {
        this.setState({ cep: event.target.value });
    }

    handleSubmit(event) {
        this.loadAdress();
        event.preventDefault();    
    }

    AdressList = (props) => {
        const { adress } = props;
        return (<div style={{ fontWeight: '300', margin: '8px 10px 12px' }}>
            <article>CEP: {adress.cep}</article>
            <article>Logradouro: {adress.logradouro}</article>
            <article>Bairro: {adress.bairro}</article>
            <article>Localidade: {adress.localidade}</article>
            <article>UF: {adress.uf}</article>
            <article>IGBE: {adress.ibge}</article>
        </div>);
    };

    InvalidCep = () => (
        <p style={{ fontWeight: '300', fontSize: '23px', color: 'red' }}></p>
    );


    state = {};

    render() {

        const { adress } = this.state;

        return (<Feed style={{ display: 'flex', flexDirection: 'row' }}>
            <form onSubmit={this.handleSubmit}>
                <Input onChange={this.handleChange}  type="number" placeholder="Digite o CEP..."></Input>
                <Submit>Buscar</Submit>
            </form>

            {(!adress) ? <this.InvalidCep /> : <this.AdressList adress={adress} />}

            <Button style={{ display: 'flex', justifyContent: 'center' }} to="/">Voltar</Button>
        </Feed>);
    }
}

export default byCep;