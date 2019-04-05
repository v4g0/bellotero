import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/js/bootstrap';
import './assets/styles/bellotero-styles.scss';
import Header from './components/layout/header/Header'
import Routes from './Routes'
import { connect } from 'react-redux';
import MoonLoader from 'react-spinners/ClipLoader';
import headerActions from './redux/actions/HeaderActions';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(headerActions.getHeader())
  }

  render() {
    const { getHeader } = this.props
    return (
      <div className="App">
        <div className="container-fluid h-100">
          {
            getHeader.menu == undefined
              ?
              <div className="h-100 w-100 d-flex align-items-center justify-content-center">
                <MoonLoader sizeUnit={"px"} size={60} color={'#071eb3'} />
              </div>

              :
              [
                <Header key="header" />,
                <Routes key="routes" />
              ]
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    getHeader: state.getHeader,
  };
}

export default connect(mapStateToProps)(App)

