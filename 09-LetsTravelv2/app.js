let express = require('express');
let app = express();
let mongoose = require('mongoose');
let multer = require('multer');
let postRouter = require('./routes/post');
let callbackRouter = require('./routes/callback-request')
let emailRouter = require('./routes/emails')

app.set('view engine', 'ejs');

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
app.use('/callback-request', callbackRouter);
app.use('/emails', emailRouter);

app.get('/sight', (req, resp) => {
    resp.render('sight', {
        title: 'Big Ben',
        imageURL: 'https://cdn.pixabay.com/photo/2017/06/11/18/03/big-ben-2393098__340.jpg',
        date: '2021-07-04',
        text: 'Big Ben Text'
    })
})

app.listen(3000, () => {
    console.log('Listening 3000...');
})