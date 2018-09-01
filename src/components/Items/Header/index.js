import React from 'react';
// actions
import { addNewItem } from '../../../redux/actions/items';
import connect from "react-redux/es/connect/connect";

class Header extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      name: '',
      amount: ''
    };
  }

  onInputChange(e) {
    let inputType = e.target.name;
      if(inputType === 'name'){
        this.setState({
          name: e.target.value
        })
      }else{
        this.setState({
          amount: e.target.value
        })
      }
  }


  onFormSubmit =  async (e) => {
    e.preventDefault();
    await this.props.addNewItem(this.state);
    this.setState({
      name: '',
      amount: ''
    })
  }

  render() {

    return (
      <form className="text-center" onSubmit={(e) => this.onFormSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add Item"
            name="name"
            value={this.state.name}
            onChange={(e) => this.onInputChange(e)}/>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="amount"
            placeholder="Add Amount"
            value={this.state.amount}
            onChange={(e) => this.onInputChange(e)}
            />
        </div>

        <button type="submit" className="btn btn-primary btn-block input-group-text">
          Add
        </button>

      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewItem: (item) => dispatch(addNewItem(item)),
  }
}

export default connect(null, mapDispatchToProps)(Header);