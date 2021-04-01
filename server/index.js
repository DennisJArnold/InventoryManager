const express = require('express');
const queries = require('../database/index.js');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/items', (req, res) => {
    queries.getAllItems((err, results) => {
        if (err) {
            console.log('Error with GET request', err);
            res.sendStatus(400);
        }else {
            console.log('Get request recieved!')
            res.send(results);
        }
    })
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/items', (req, res) => {
    queries.insertItem(req.body, (err, results) => {
        if (err) {
            console.log('Error with POST request', err);
            res.sendStatus(400)
        }else {
            console.log('POST request recieved!')
            res.send(results);
        }
    })
})

app.post('/orders', (req, res) => {
    queries.insertOrder(req.body, (err, results) => {
        if (err) {
            console.log('Error with POST request', err);
            res.sendStatus(400)
        }else {
            console.log('POST request recieved!')
            res.send(results);
        }
    })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})