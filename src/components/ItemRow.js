import React from 'react';

class ItemRow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            ohUnits: 0,
            ohCases: 0,
            quantity: 0
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: parseFloat(e.target.value)})
    }

    handleSubmit(e) {
        e.preventDefault()
        let item = this.props.item;
        item.quantity = parseFloat(this.state.quantity);
        if (item.quantity > 0) {
            this.props.addItemToCart(item);
        }
    }

    render() {
        var ohTotal = (this.state.ohCases * this.props.item.size) + parseFloat(this.state.ohUnits);
        var suggested = this.props.item.par - ohTotal < 0 ? 0 : Math.ceil((this.props.item.par - ohTotal) / this.props.item.size);
        return (
        <div className='table-row' key={this.props.item.id}>
            <div className='item-name cell'>{this.props.item.item_name}</div>
            <div className='on-hand-unit cell'>
                <input type='number' onChange={this.handleChange} name='ohUnits' value={this.state.ohUnits} className='num-input'></input>
            </div>
            <div className='on-hand-case cell'>
                <input type='number' onChange={this.handleChange} name='ohCases' value={this.state.ohCases} className='num-input'></input>
            </div>
            <div className='par cell'>{this.props.item.par}</div>
            <div className='suggested cell' style={ohTotal + parseFloat(this.props.quantityInCart * this.props.item.size) >= this.props.item.par ? {border: '2px solid green'}: {border: '2px solid red'}} >
                {suggested}</div>
            <div className='price cell'>${parseFloat(this.props.item.cost).toFixed(2)}</div>
            <div className='size cell'>{this.props.item.size}</div>
            <div className='total cell'>${(this.props.item.cost * this.state.quantity).toFixed(2)}</div>
            <div className='add-to-order cell'>
                <input type='number' onChange={this.handleChange} name='quantity' value={this.state.quantity} className='num-input'></input>
                <input type='submit' onClick={this.handleSubmit} value='Add to Order!'></input>
            </div>
        </div>
        )
    }
}

export default ItemRow;