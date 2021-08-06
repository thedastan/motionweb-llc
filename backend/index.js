const express = require("express");
const cors = require('cors');
const config = require('./config');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const users = require('./app/users');
const reqs = require('./app/reqs')

const run = async () => {
    app.use('/bid', users)
    app.listen(config.port)
}
const run2 = async () => {
    app.use('/reqs', reqs)

    app.listen(8800)
}


run().catch(async error => {
    console.log(error)
})
run2().catch(async error => {
    console.log(error)
})


