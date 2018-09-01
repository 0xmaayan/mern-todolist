import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';
// components
import {siteFetchItems} from "../../redux/actions/items";
import {Col} from '../common/Grid';
import Header from './Header/index';
import connect from "react-redux/es/connect/connect";
import TodoList from "./TodoList";

class ShoppingList extends React.Component {

  constructor(props){
    super(props)

    this.state = {

    }
  }

  async componentDidMount(){
    await this.props.siteFetchItems();
  }

  render() {
    const { item } = this.props;
    const { items } = item;

    return (
      <Col xs={12} md={6} mdOffset={4} lg={4}>
        <Header/>
          {
            !isEmpty(items) && <TodoList items={items}/>
          }
      </Col>
    );
  }
}

ShoppingList.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
};

const mapStateToProps = state => ({
  item: state.item
});

const mapDispatchToProps = (dispatch) => {
  return {
    siteFetchItems: () => dispatch(siteFetchItems()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
