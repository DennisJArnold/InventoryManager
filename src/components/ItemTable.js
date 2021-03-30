import React from 'react';
import ItemRow from './ItemRow.js';

class ItemTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className='item-table'>
              <div className='table-row'>
                  <div className='table-header'>Item Name</div>
                  <div className='table-header'>On Hand (Units)</div>
                  <div className='table-header'>On Hand (Cases)</div>
                  <div className='table-header'>Par (Units)</div>
                  <div className='table-header'>Suggested Order</div>
                  {/* <div>Last Week Order</div>
                  <div>Average Weekly Order</div> */}
                  <div className='table-header'>Case Cost</div>
                  <div className='table-header'>Case Size</div>
                  <div className='table-header'>Total Cost</div>
                  <div className='table-header'>Add to Order</div>
              </div>
              {this.props.items.map((item) => {
                  return(
                    <ItemRow item={item} key={item.id} addItemToCart={this.props.addItemToCart}/>
                  )
              })}
            </div>
        )
    }
}

export default ItemTable;