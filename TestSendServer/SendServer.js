
let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require("isomorphic-fetch");


app.post('/api/resource', function (req, res) {
    let data = req.body;
    let url;
    url= 'http://52.29.47.55:80/api/data';

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
    })
        .catch(function(error) {
            console.log('Request failed: ' + error.message);
    });

    res.end();


});







let server = app.listen(80, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});