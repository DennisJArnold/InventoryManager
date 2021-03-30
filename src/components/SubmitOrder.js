import React from 'react';

const SubmitOrder = ({handleOrderSubmit}) => {
    return (
        <button className='submit-order' onClick={handleOrderSubmit}>Submit Order</button>
    )
}

export default SubmitOrder;