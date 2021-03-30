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
              {this.props.items.map((item) => {
                  return(
                    <div className='table-row' key={item.id}>
                        <div className='item-name cell'>{item.item_name}</div>
                        <div className='on-hand-unit cell'>onHandUnit</div>
                        <div className='on-hand-case cell'>onHandCase</div>
                        <div className='par cell'>{item.par}</div>
                        <div className='suggested cell'>{item.par}</div>
                        <div className='price cell'>{item.cost}</div>
                        <div className='size cell'>{item.size}</div>
                        <div className='total cell'>{item.cost}</div>
                    </div>
                  )
              })}
            </div>
        )
    }
}

export default ItemTable;