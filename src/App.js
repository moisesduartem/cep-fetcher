import React, { Component } from 'react';
import Header from './components/Header';
import Routes from './routes';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div id="page">
          <Routes />
          <small>Moisés Mariano - github.com/moisesduartem - viacep.com.br</small>
        </div>
      </div>
    );
  }
}

export default App;
