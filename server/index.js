const express = require('express');
const queries = require('../database/index.js');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/items', (req, res) => {
    queries.getAllItems((err, results) => {
        if (err) {
            console.log('Error with GET request', err);
            res.status(400).send(err);
        } else {
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
            res.status(400).send(err);
        } else {
            console.log('POST request recieved!')
            res.send(results);
        }
    })
})

app.post('/orders', (req, res) => {
    queries.insertOrder(req.body, (err, results) => {
        if (err) {
            console.log('Error with POST request', err);
            res.status(400).send(err);
        } else {
            console.log('POST request recieved!')
            res.send(results);
        }
    })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})