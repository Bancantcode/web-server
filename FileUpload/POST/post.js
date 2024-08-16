const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html');
});

app.post('/process_post', (req, res) => {
    const response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    res.json(response);
});

app.listen(3000, () => console.log("Server is running on http://localhost:3000"));
