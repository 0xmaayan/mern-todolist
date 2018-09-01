import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import Menu from '../components/Header/menu-bar/index';
import ShoppingList from '../components/Items/index';
import {Container, Row} from '../components/common/Grid';

class App extends Component {

  render() {
    return (
      <Container className="App" fluid={true}>
        <Row>
            <Menu />
        </Row>
        <Row>
          <ShoppingList />
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state){
  return {}
}


const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
