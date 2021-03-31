import React from 'react';

const OrderDisplay = (props) => {
  return (
      <div className='order-display'>
          {Object.keys(props.cart).map((id) => {
            return (
              <div className='display-row'key={id}>
                <div className='display-cell'>{props.cart[id].quantity}</div>
                <div className='display-cell'>{props.cart[id].item_name}</div>
                <div className='display-cell'>${props.cart[id].cost}</div>
                <div className='display-cell'>${(props.cart[id].cost * props.cart[id].quantity).toFixed(2)}</div>
                <button className='remove-item' onClick={() => props.removeItem(id)}>X</button>
              </div>
            )
          })}
      </div>
  )
}
export default OrderDisplay;