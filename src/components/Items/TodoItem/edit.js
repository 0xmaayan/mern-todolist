import {Col, Row} from "../../common/Grid";
import Icon from "../../common/Icon";
import React from "react";
import PropTypes from "prop-types";

const EditItem = (props) => {

  const { name, amount, item, onEditItemName, onEditItemAmount, onSaveItem } = props;

  return (
    <Row>
      <Col xs={5} sm={5} md={5}>
        <input
          type="text"
          value={name}
          onChange={(e) => onEditItemName(e)}
        />
      </Col>
      <Col xs={5} sm={5} md={5}>
        <input
          type="text"
          value={amount}
          onChange={(e) => onEditItemAmount(e)}
        />
      </Col>
      <Col xs={2} sm={2} md={2} className="text-right">
              <span
                type="text"
                onClick={() => onSaveItem(item)}
              >
                <Icon icon="check-circle fa-lg"/>
              </span>
      </Col>
    </Row>
  )
}

EditItem.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  item: PropTypes.object,
  onEditItemName: PropTypes.func,
  onEditItemAmount: PropTypes.func,
  onSaveItem: PropTypes.func
};


export default EditItem
