import React from 'react';
import PropTypes from 'prop-types';
// components
import TodoItem from '../TodoItem/index';

class TodoList extends React.Component {

  constructor(props){
    super(props);

    this.state = {

    }
  }


  render() {

    const { items } = this.props;

    return (
      <ul style={{paddingLeft:'0px'}}>
        {items.map((item, i) => {
          return <TodoItem
                  key={i}
                  item={item}
                 />
        })}
      </ul>
    );
  }
}

TodoItem.propTypes = {
  items: PropTypes.array
};

export default TodoList;