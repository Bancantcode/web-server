var express = require('express')
var app = express();

app.get('/', (req, res) => {
    res.send("You have successfully created your second app!")
})

var server = app.listen(2001, () => {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at https://%s:%s", host, port)
})