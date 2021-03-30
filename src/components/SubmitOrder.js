import React from 'react';

const SubmitOrder = ({handleOrderSubmit}) => {
    return (
        <button onClick={handleOrderSubmit}>Submit Order</button>
    )
}

export default SubmitOrder;