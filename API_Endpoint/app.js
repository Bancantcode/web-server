const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = [
    { id: 1, name: "Carmela", email: "mela@gmail.com", age: 25, salary: 25000 },
    { id: 2, name: "Joseph", email: "joe@gmail.com", age: 30, salary: 45000 },
    { id: 3, name: "James", email: "james@gmail.com", age: 35, salary: 30000 },
    { id: 4, name: "John", email: "john@gmail.com", age: 40, salary: 25000 },
    { id: 5, name: "Frank", email: "frank@gmail.com", age: 45, salary: 45000 },
    { id: 6, name: "Alex", email: "alex@gmail.com", age: 21, salary: 33000 },
];

app.get('/', (req, res) => {
    res.send(`
        <h1>Available Routes</h1>
        <ul>
          <li>GET localhost:3000/api/users</li>
          <li>GET localhost:3000/api/users/:id</li>
          <li>GET localhost:3000/api/inputUsers</li>
          <li>POST localhost:3000/api/users</li>
          <li>DELETE localhost:3000/api/users/:id</li>
        </ul>
      `);
});

app.get('/api/users', (req, res) => {
    res.send(data);
});

app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = data.find(d => d.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.get('/api/users/:id/params', (req, res) => {
    const routeParams = req.params;
    const queryParams = req.query;

    res.json({
        routeParams,
        queryParams
    });
});

app.get('/api/inputUsers', (req, res) => {
    res.send(`
        <h2>Add a New User</h2>
        <form action="/api/users" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br>
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" required><br>
            <label for="salary">Salary:</label>
            <input type="number" id="salary" name="salary" required><br><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/api/users', (req, res) => {
    const newUser = {
        id: data.length + 1,
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        salary: req.body.salary
    };
    data.push(newUser);
    res.status(201).json(newUser);
});

app.delete('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = data.findIndex(d => d.id === userId);
    if (userIndex !== -1) {
        data.splice(userIndex, 1);
        res.json({ message: 'User deleted successfully' });
    } 
    else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.listen(3000, () => console.log("Listening to http://localhost:3000"));
