import React from 'react';

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
              {/* For Each item, create table row */}
            </div>
        )
    }
}

export default ItemTable;