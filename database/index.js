const {Client} = require('pg')
const client = new Client({
    user: 'ubuntu',
    host: '3.21.171.140',
    database: 'items',
    password: 'ubuntu'
})

client.connect()
.then(() => console.log('Database Connected'))
.catch(e => console.log(e));

const getAllItems = (cb) => {
    client.query('SELECT * FROM items', (err, results) => {
        if(err) {
            cb(err);
        } else {
            cb(null, results.rows);
        }
    })
}

const insertItem = (item, cb) => {
    let { itemName, par, cost, size } = item;
    client.query(`INSERT INTO items (item_name, par, cost, size) VALUES ('${itemName}', ${par}, ${cost}, ${size})`, (err, results) => {
        if (err){
            cb(err);
        } else {
            cb(null, results);
        }
    })
}

const insertOrder = (order, cb) => {
    let date = JSON.stringify(new Date());
    let total = 0;
    Object.keys(order).map((id) => {
        total += order[id].cost * order[id].quantity;
    })
    client.query(`INSERT INTO orders (date, total) VALUES ('${date}', '${total}') RETURNING id`, (err, results) => {
        if (err){
            cb(err);
        } else {
            let orderId = results.rows[0].id;
            Object.keys(order).map((id) => {
                client.query(`INSERT INTO items_orders (item_id, order_id, quantity) VALUES (${id}, ${orderId}, ${order[id].quantity})`, (err, results) => {
                    if (err) {
                        cb(err)
                    } 
                })
            })
          cb(null, results)
        }
    })
}

module.exports = {
    getAllItems,
    insertItem,
    insertOrder
}
