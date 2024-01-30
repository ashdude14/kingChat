var express = require('express');
var app = express();
var port = 3001;
app.get('/', function (req, res) {
    res.send('Server is running');
});
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
