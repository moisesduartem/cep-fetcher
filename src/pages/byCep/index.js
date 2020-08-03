import React, { Component } from 'react';
import Button from '../../components/Button';
import Feed from '../../components/Feed';
import Input from '../../components/Input';
import './styles.css'; 

class byCep extends Component {

    state = {};

    render() {

        return (<Feed style={{ display: 'flex', flexDirection: 'row' }}>
            <form>
                <Input type="number" placeholder="Digite o CEP..."></Input>
            </form>
            <Button style={{ display: 'flex', justifyContent: 'space-between' }} to="/">Voltar</Button>
        </Feed>);
    }
}

export default byCep;