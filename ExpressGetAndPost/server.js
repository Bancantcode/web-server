const bodyParser = require('body-parser');
const express = require('express');
const app = express();

var students = [
    { 'name': 'Santiago, Bryan', 'studno': '12345' },
    { 'name': 'Banwagon', 'studno': '67891' },
];

app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(students));
    res.end();
})

app.get('/student', (req, res) => {

//get only the specified id
//localhost:3000/student?id=12345
var studId = req.query.id;
var studIndex = -1;

for (var i = 0; i < students.length; i++) {
    if (students[i].studno == studId) {
        studIndex = i;
        break;
    }
}

    if (studIndex != -1) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(students[studIndex]));
        res.end();
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<html><body><h1>Student not found</h1></body></html>");
        res.end();
    }
})

app.get('/add', (req, res) => {
    res.sendFile(__dirname + "/" + "form.html")
})

var urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.post('/create', urlEncodedParser, (req, res) => {
    var student = {
        'name': req.body.name,
        'studNo': req.body.studNo
    };
    students.push(student);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<html><body><h1>Student has been added</h1></body></html>");
    res.end();
})

app.listen(3000, () => console.log("server is running on http://localhost:3000"));