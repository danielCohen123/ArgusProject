
let express = require('express');
let bodyParser = require('body-parser');

let app = express();
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




let server = app.listen(80, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});