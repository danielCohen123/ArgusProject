
const express = require('express');
const bodyParser = require('body-parser');
const otherHost = require('./config.js');
require("isomorphic-fetch");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/resource', function (req, res) {
    const data = req.body;

    const url = `http://${otherHost.otherIP}:${otherHost.otherPort}/api/data`;

    // Transfer the information to the receiving server
    fetch(url, {
        credentials: "same-origin",
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (!res.ok) {
            throw new Error(); // Will take you to the `catch` below
        }
    }).catch(function(error) {
        console.log('Request failed: ' + error.message);
    });

    res.end();

});

const server = app.listen(80, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Example app listening at http://${host}:${port}`)
});