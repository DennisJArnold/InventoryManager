import React from 'react';

class AddNewItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName: '',
            cost: 0.00,
            size: 0,
            par: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
      e.preventDefault()
      if(this.state.cost && this.state.itemName && this.state.size && this.state.par) {
        this.props.addItemToList(this.state);
      }
    }

    render() {
        return (
            <form className='add-item'>
                <label>
                  Name: 
                  <input type='text' name='itemName' className='num-input' value={this.state.itemName} onChange={this.handleChange} />
                </label>
                <label>
                  Case Price: $
                  <input type='number' name='cost' className='num-input' value={this.state.cost} onChange={this.handleChange} />
                </label>
                <label>
                  Case Size: 
                  <input type='number' name='size' className='num-input' value={this.state.size} onChange={this.handleChange} />
                </label>
                <label>
                  Par (Units): 
                  <input type='number' name='par' className='num-input' value={this.state.par} onChange={this.handleChange} />
                </label>
                <input type='submit' value='Add New Item to Inventory List' onClick={this.handleSubmit} />
            </form>
        )
    }
}

export default AddNewItem;