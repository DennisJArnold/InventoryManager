import React from 'react';

const SubmitOrder = (props) => {
    return (
        <button className='submit-order' onClick={props.handleOrderSubmit}>Submit Order</button>
    )
}

export default SubmitOrder;