const {Client} = require('pg')
const client = new Client({
    user: 'dennis',
    host: 'localhost',
    database: 'items',
    password: '',
    port: 5432
    
})

client.connect()
.then(() => console.log('Database Connected'))
.catch(e => console.log(e));

const getAllItems = (cb) => {
    client.query('SELECT * FROM items', (err, results) => {
        if(err) {
            cb(err);
        } else {
            cb(null, results);
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

module.exports = {
    getAllItems,
    insertItem
}