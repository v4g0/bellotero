import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/js/bootstrap';
import './assets/styles/bellotero-styles.scss';
import Header from './components/layout/header/Header'
import Routes from './Routes'
import Base from './components/layout/Base'
// import './components/layout/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Header />
          {/* <Base /> */}
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
