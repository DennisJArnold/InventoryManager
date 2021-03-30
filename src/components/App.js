import React from 'react';
import OrderInfo from './OrderInfo.js';
import ItemTable from './ItemTable.js';
import AddNewItem from './AddNewItem';
import OrderDisplay from './OrderDisplay.js';
import SubmitOrder from './SubmitOrder.js';
import axios from 'axios';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            items: [],
            cart: [],
            orders: []
        }
        this.addItemToList = this.addItemToList.bind(this);
        this.handleOrderSubmit = this.handleOrderSubmit.bind(this);
    }

    componentDidMount() {
        this.getAllItemData();
    }

    getAllItemData() {
        axios.get('http://localhost:3001/items')
        .then((res) => {
            console.log(res.data);
            this.setState({ items: res.data });
        }, (err) => {
            console.log(err);
        })
            
    }

    getOrdersData() {
        // make request to retrieve past order data.
    }

    addItemToCart(item) {
        // adds item to cart
    }

    addItemToList(item) {
        axios.post('/items', item)
        .then((res) => {
            console.log(res.data);
        }, (err) => {
            console.log(err);
        })
        .then(() => {
            getAllItemData()
        })
    }

    handleOrderSubmit() {
        // submits order!
    }

    render() {
        return (
            <div className='container'>
              <h1 className='header'>Inventory Manager</h1>
              <OrderDisplay cart={this.state.cart} />
              <OrderInfo cart={this.state.cart} />
              <SubmitOrder handleOrderSubmit={this.handleOrderSubmit} />
              <ItemTable items={this.state.items} />
              <AddNewItem addItemToList={this.addItemToList} />
            </div>
        )
    }
}

export default App;
