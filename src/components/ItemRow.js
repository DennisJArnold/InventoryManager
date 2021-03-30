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
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        let item = this.props.item;
        item.quantity = parseFloat(this.state.quantity);
        this.props.addItemToCart(item);
    }

    render() {
        return (
        <div className='table-row' key={this.props.item.id}>
            <div className='item-name cell'>{this.props.item.item_name}</div>
            <div className='on-hand-unit cell'>
                <input type='number' onChange={this.handleChange} name='ohUnits' value={this.state.ohUnits}></input>
            </div>
            <div className='on-hand-case cell'>
                <input type='number' onChange={this.handleChange} name='ohCases' value={this.state.ohCases}></input>
            </div>
            <div className='par cell'>{this.props.item.par}</div>
            <div className='suggested cell'>
                {/* Checks if units on hand are less than the par. If it is, displays the min number of cases needed to be ordered to get above par */}
                {this.props.item.par - (this.state.ohCases * this.props.item.size) - this.state.ohUnits < 0 ? 0 : Math.ceil((this.props.item.par - (this.state.ohCases * this.props.item.size) - this.state.ohUnits)/this.props.item.size)}</div>
            <div className='price cell'>${parseFloat(this.props.item.cost).toFixed(2)}</div>
            <div className='size cell'>{this.props.item.size}</div>
            <div className='total cell'>${(this.props.item.cost * this.state.quantity).toFixed(2)}</div>
            <div className='add-to-order cell'>
                <input type='number' onChange={this.handleChange} name='quantity' value={this.state.quantity}></input>
                <input type='submit' onClick={this.handleSubmit} value='Add to Order!'></input>
            </div>
        </div>
        )
    }
}

export default ItemRow;