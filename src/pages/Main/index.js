import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';
import './styles.css'; 

class Main extends Component {

    state = {
        gender: ['o', 'a', 'x'],
    };

    randomGenderViewer = () => {

    }

    showThisOption = () => (
        alert('Aqui')
    );

    render() {

        const angleRight = <FontAwesomeIcon icon={faAngleRight} />

        return (<div id="main">
            <div className="title-box">
                {/* <h1>{`Bem-vind${this.state.gender}!`}</h1> */}
            </div>

            <h2>Buscar endereço por:</h2>
            <Button option="1" icon={angleRight}>CEP</Button>
            <Button option="2" icon={angleRight}>Outros dados</Button>


        </div>);
    }
}

export default Main;