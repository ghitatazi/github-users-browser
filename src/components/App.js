import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import UsersListContainer from '../containers/UsersListContainer';
import UsersDetailsContainer from '../containers/UserDetailsContainer';
import AlertErrorContainer from '../containers/AlertErrorContainer';
import { Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to Github users browser</h2>
          </div>
        </div>
        <Col lgOffset={4} mdOffset={3} smOffset={2} xsOffset={1} lg={2} md={2} sm={3} xs={3}>
          <UsersListContainer/>
        </Col>
        <div>
          <UsersDetailsContainer/>
        </div>
        <div>
          <AlertErrorContainer/>
        </div>
      </div>
    );
  }
}

export default App;
