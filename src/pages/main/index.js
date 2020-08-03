import React, { Component } from 'react';
import Button from '../../components/Button';
import Feed from '../../components/Feed';
import PopUp from '../../components/PopUp';

import './styles.css'; 

class Main extends Component {

    state = {
        PopUpVisibility: 'hidden',
    };

    togglePopUp = () => {
        // this.setState({ PopUpVisibility: 'visible' });
        if (this.state.PopUpVisibility === 'hidden') {
            this.setState({ PopUpVisibility: 'visible' });
        } else {
            this.setState({ PopUpVisibility: 'hidden' });
        }
    }

    render() {

        return (<>
        <Feed>
            <div className="title-box">
                <h1>Bem-vindo(a)!</h1>
            </div>
            <h2>Buscar endereço por:</h2>
            <div id="button-list">
                <Button to="/cep/">CEP</Button>
                <Button onClick={this.togglePopUp} disabled to="">Outros dados</Button>
            </div>
        </Feed>
        
        <PopUp visibility={this.state.PopUpVisibility}>Em desenvolvimento... mas em breve você poderá encontrar um endereço através de outros dados!</PopUp>
        
        </>);
    }
}

export default Main;