import React, { Component } from 'react';
import UsersListContainer from '../containers/UsersListContainer';
import UsersDetailsContainer from '../containers/UserDetailsContainer';
import AlertErrorContainer from '../containers/AlertErrorContainer';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col lgOffset={4} mdOffset={3} smOffset={2} xsOffset={1} lg={2} md={2} sm={3} xs={3}>
              <UsersListContainer/>
            </Col>
            <Col>
              <UsersDetailsContainer/>
            </Col>
          </Row>
        </Grid>
        <div>
          <AlertErrorContainer/>
        </div>
      </div>
    );
  }
}

export default App;
