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
            cart: {},
            orders: []
        }
        this.addItemToList = this.addItemToList.bind(this);
        this.handleOrderSubmit = this.handleOrderSubmit.bind(this);
        this.addItemToCart = this.addItemToCart.bind(this);
        this.removeItem = this.removeItem.bind(this);
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
        if (this.state.cart[item.id]) {
            this.setState(prevState => ({
                cart: {
                    ...prevState.cart,
                    [item.id]: {...this.state.cart[item.id], quantity: this.state.cart[item.id].quantity += item.quantity}
                }
            }));
        } else {
            this.setState(prevState => ({
                cart: {
                    ...prevState.cart,
                    [item.id]: item
                }
            }))
        }
    }

    addItemToList(item) {
        axios.post('http://localhost:3001/items', item)
        .then((res) => {
            console.log(res.data);
        }, (err) => {
            console.log(err);
        })
        .then(() => {
            this.getAllItemData()
        })
    }

    removeItem(id) {
        this.setState(prevState => {
            delete prevState.cart[id];
            return {
              cart: {
                ...prevState.cart,
              }
            }
        })
    }

    handleOrderSubmit() {
        axios.post('http://localhost:3001/orders', this.state.cart)
        .then((res) => {
            console.log(res.data);
        }, (err) => {
            console.log(err);
        })
        .then(() => {
            this.setState({cart: {}});
        })
    }

    render() {
        return (
            <div className='container'>
              <h1 className='header'>Inventory Manager</h1>
              <div className='order-container'>
                <OrderDisplay cart={this.state.cart} removeItem={this.removeItem}/>
                <OrderInfo cart={this.state.cart} />
                <SubmitOrder handleOrderSubmit={this.handleOrderSubmit} />
              </div>
              <div className='table-container'>
                <ItemTable items={this.state.items} addItemToCart={this.addItemToCart} itemsInCart={this.state.cart} />
              </div>
              <AddNewItem addItemToList={this.addItemToList} />
            </div>
        )
    }
}

export default App;
