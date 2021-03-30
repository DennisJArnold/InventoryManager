import React from 'react';

const OrderInfo = ({cart}) => {
    let total = 0;
    let itemCount = 0;
    
    // for each item in cart, measure quantity and add appropriate price and count to variables

  return (
      <div>
          <span>Total Order Cost: </span>
          <span>{total}</span>
          <br />
          <span>Total Number of Items: </span>
          <span>{itemCount}</span>
      </div>
  )
}

export default OrderInfo;