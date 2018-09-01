import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import connect from "react-redux/es/connect/connect";
// actions
import { toggleItemAsComplete, onUpdateItem, onDeleteItem } from '../../../redux/actions/items';
// components
import EditItem from "./edit";
import Item from "./item";
// style
import style from './style.css';

class TodoItem extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      name: '',
      amount: '',
      isEditing: false
    }
  }

  async onCheckboxMarked(item){
    item.completed = !item.completed;
    await this.props.toggleItemAsComplete(item);
  }

  onDeleteItem(item){
    this.props.onDeleteItem(item)
  }

  onEditItem(item){
    this.setState({
      isEditing: true,
      name: item.name,
      amount: item.amount
    })
  }

  onEditItemName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onEditItemAmount(e) {
    this.setState({
      amount: e.target.value
    })
  }

  async onSaveItem(item) {
    let data = {
      name: this.state.name,
      amount:this.state.amount
    }
    await this.props.onUpdateItem(item, data);
    this.setState({
      isEditing: false
    })
  }

  render() {

    const {item} = this.props;

    let listItem = classNames('list-group-item', { 'is-completed': item.completed });

    return (
      <li
        className={listItem}
        >
        {

          this.state.isEditing

          ?

          <EditItem
            name={this.state.name}
            amount={this.state.amount}
            item={item}
            onEditItemName={(e) => this.onEditItemName(e)}
            onEditItemAmount={(e) => this.onEditItemAmount(e)}
            onSaveItem={(e) => this.onSaveItem(e)}
          />

          :

          <Item
            item={item}
            amount={this.state.amount}
            onDeleteItem={(e) => this.onDeleteItem(e)}
            onEditItem={(e) => this.onEditItem(e)}
            onCheckboxMarked={(e) => this.onCheckboxMarked(e)}
          />
        }
      </li>
    );
  }
}

TodoItem.propTypes = {
  item: PropTypes.object
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleItemAsComplete: (item, completed) => dispatch(toggleItemAsComplete(item, completed)),
    onUpdateItem: (item, data) =>dispatch(onUpdateItem(item, data)),
    onDeleteItem: (item) => dispatch(onDeleteItem(item))
  }
}

export default connect(null, mapDispatchToProps)(TodoItem);
