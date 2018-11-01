
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let dataToPrint;

// Gets the json from the other server and saves it
app.post('/api/data', function (req, res) {
    dataToPrint = req.body;
    res.end();
});

// Sending the json back
app.get('/api/resource', function (req, res) {
    console.log(dataToPrint);
    res.send(dataToPrint);
});

const server = app.listen(80, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Example app listening at http://${host}:${port}`)
});