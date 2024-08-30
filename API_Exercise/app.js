const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let books = [
    { id: 1, title: 'Alamat ni Juan', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'Atomic Habit', author: 'James Clear' },
    { id: 3, title: '1984', author: 'George Orwell' }
];

app.get('/', (req, res) => {
    res.json(books);
});

app.get('/book', (req, res) => {
    const bookId = parseInt(req.query.id);
    const book = books.find(b => b.id === bookId);

    if (book) {
        res.json(book);
    } 
    else {
        res.status(404).send('<h1>Book not found</h1>');
    }
});

app.get('/add-book', (req, res) => {
  res.sendFile(__dirname + "/" + "form.html");
});

app.post('/add-book', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(newBook);
    res.send(`<h1>Book Added Successfully</h1><a href="/">Go Back</a>`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});