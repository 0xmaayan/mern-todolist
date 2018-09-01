import {Col, Row} from "../../common/Grid";
import Icon from "../../common/Icon";
import React from "react";
import PropTypes from "prop-types";


const Item = (props) => {

  const { item, amount, onDeleteItem, onEditItem, onCheckboxMarked  } = props;

  return (
    <Row>
      <Col xs={1} sm={1} md={1}>
        <input type="checkbox"
               id="checkbox"
               checked={item.completed}
               onChange={() => onCheckboxMarked(item)}
        />
      </Col>
      {
        item.amount
          ?
          <Col xs={7} sm={9} md={9}>
            {item.name} - ( {amount || item.amount} )
          </Col>
          :
          <Col xs={7} sm={9} md={9}>
            {item.name}
          </Col>
      }
      <Col xs={3} sm={2} md={2} className="text-right">
              <span onClick={() => onDeleteItem(item)} style={{marginRight: '10px',cursor:'pointer'}}><Icon
                icon="trash-alt fa-lg"/></span>
        <span type="text" onClick={() => onEditItem(item)} style={{cursor:'pointer'}}><Icon icon="edit fa-lg"/></span>
      </Col>
    </Row>
  )
}

Item.propTypes = {
  amount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  item: PropTypes.object,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  onCheckboxMarked: PropTypes.func
};

export default Item;
