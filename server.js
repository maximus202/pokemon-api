const express = require('express');
const morgan = require('morgan');

const app = express()

app.use(morgan('dev'));

app.use((req, res) => {
    res.send('hello wwld');
})

app.listen(8000, () => {
    console.log('Now listening on port 8000.')
})