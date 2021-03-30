import React from 'react';
import OrderInfo from './OrderInfo.js';
import ItemTable from './ItemTable.js';
import AddNewItem from './AddNewItem';
import OrderDisplay from './OrderDisplay.js';
import SubmitOrder from './SubmitOrder.js';

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

    getAllItemData() {
        
    }

    getOrdersData() {
        // make request to retrieve past order data.
    }

    addItemToCart(item) {
        // adds item to cart
    }

    addItemToList(item) {
        let container = this.state.items;
        container.push(item);
        this.setState({items: container});
    }

    handleOrderSubmit() {
        // submits order!
    }

    render() {
        return (
            <div>
              <h1>Inventory Manager</h1>
              <OrderDisplay props={this.state.cart} />
              <OrderInfo props={this.state.cart} />
              <SubmitOrder props={this.handleOrderSubmit} />
              <ItemTable props={this.state.items} />
              <AddNewItem props={this.addItemToList} />
            </div>
        )
    }
}

export default App;
