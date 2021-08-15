let express = require('express');
let app = express();
let mongoose = require('mongoose');
let multer = require('multer');
let postRouter = require('./routes/post');


mongoose.connect('mongodb://localhost/travels').then(() => {
    console.log('Connected to MongoDB')
}).catch(() => {
    console.log('Something went wrong')
})

app.use(express.json());

let imageStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/images'),
    filename: (req, file, cb) => cb(null, file.originalname)
})

app.use(multer({ storage: imageStorage }).single('imageFile'));
app.use(express.static('public'));
app.use('/posts', postRouter);

app.listen(3000, () => {
    console.log('Listening 3000...');
})