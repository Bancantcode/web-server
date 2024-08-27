var express = require('express')
var app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send("You have successfully created second app!")
})

app.get('/ban', (req, res) => {
    res.send("Bryan Aaron B. Santiago | WD-303")
})

var server = app.listen(8081, () => {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at https://%s:%s", host, port);
})