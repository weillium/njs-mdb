const express       = require('express');
const MongoClient   = require('mongodb').MongoClient;
const bodyParser    = require('body-parser');
const database      = require('./config/database');

const app           = express();
const port          = 5000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(database.url, (err, client) => {
    if (err) {
        return console.log(err);
    }

    db = client.db('njs-mdb')
    require('./app/routes')(app, db);

    app.listen(port, () => {
        console.log(port);
    });
});