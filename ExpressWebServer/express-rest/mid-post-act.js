const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Postman");
});

const movies = [
    { id: 1, title: "Superman" },
    { id: 2, title: "Thor" },
    { id: 3, title: "Iron man" },
]

app.get('/api/movies', (req, res) => {
    res.send(movies);
});

app.post('/api/movies', (req, res) => {
    console.log('Received body:', req.body);
    
    const movie = {
        id: movies.length + 1,
        title: req.body.title
    };
    movies.push(movie);
    res.send(movie);
});

app.listen(8080, () => console.log("Server running on http://localhost:8080"))