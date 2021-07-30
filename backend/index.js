const express = require("express");
const cors = require('cors');
const config = require('./config');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const users = require('./app/users');


const run = async () => {
    app.use('/bid', users)

    app.listen(config.port)
}


run().catch(async error => {
    console.log(error)
})

