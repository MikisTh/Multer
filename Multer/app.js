
const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000; // define o número da porta
const storage = multer.diskStorage({
 destination: function (req, file, cb) {

 cb(null, 'uploads/');
 },
 filename: function (req, file, cb) {

 cb(null, file.originalname);
 }
});

const upload = multer({ storage: storage });

app.post('/uploadSingle', upload.single('singleFile'), (req, res) => {

 res.json({ message: 'Single file uploaded successfully!' });
});

app.post('/uploadMultipleSingleField', upload.array('multipleFiles', 5), (req, res) => {

 res.json({ message: 'Multiple files from a single field uploaded successfully!' });
});

app.post('/uploadMultipleFields', upload.fields([
 { name: 'field1Files', maxCount: 5 },
 { name: 'field2Files', maxCount: 5 }
]), (req, res) => {

 res.json({ message: 'Multiple files from multiple fields uploaded successfully!' });
});

app.listen(port, () => {
 console.log(`Server running on http://localhost:${port}`);
});