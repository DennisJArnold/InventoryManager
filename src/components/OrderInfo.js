import React from 'react';

const OrderInfo = ({cart}) => {
    let total = 0;
    let itemCount = 0;
    
    // for each item in cart, measure quantity and add appropriate price and count to variables
    for(let key in cart) {
        total+= cart[key].quantity * cart[key].cost;
        itemCount+= cart[key].quantity;
    }

  return (
      <div className='order-info'>
          <span>Total Order Cost: </span>
          <span className='order-total'>${total.toFixed(2)}</span>
          <br />
          <span>Total Number of Items: </span>
          <span className='order-total'>{itemCount.toFixed(0)}</span>
      </div>
  )
}

export default OrderInfo;