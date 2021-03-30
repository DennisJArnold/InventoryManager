import React from 'react';

class AddNewItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName: '',
            casePrice: 0.00,
            caseSize: 0,
            par: 0

        }
    }

    render() {
        return (
            <form className='add-item'>
                <label>
                  Name: 
                  <input type='text' name='itemName' value={this.state.itemName} />
                </label>
                <label>
                  Case Price: $
                  <input type='number' name='casePrice' value={this.state.casePrice} />
                </label>
                <label>
                  Case Size: 
                  <input type='number' name='caseSize' value={this.state.caseSize} />
                </label>
                <label>
                  Par (Units): 
                  <input type='number' name='par' value={this.state.par} />
                </label>
                <input type='submit' value='Add Item to Inventory' />
            </form>
        )
    }
}

export default AddNewItem;