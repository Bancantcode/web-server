const express = require('express');
const app = express();

const path = require('path');
const mime = require('mime-types');
const multer = require('multer');

const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } 
    else {
        cb(new Error('Invalid file type. Only images are allowed.'), false);
    }
};

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: fileStorage, fileFilter: fileFilter, });

app.post('/uploads', upload.single('myFile'), (req, res) => {
    console.log(req.file);

    req.file.mimetype = mime.lookup(req.file.originalname);

    res.sendFile(path.join(__dirname, 'file-uploaded.html'));
});

app.get('/file-upload', (req, res) => {
    res.sendFile(path.join(__dirname, 'file-upload.html'));
});

app.listen(3000, () => console.log("Server is running on http://localhost:3000"));
