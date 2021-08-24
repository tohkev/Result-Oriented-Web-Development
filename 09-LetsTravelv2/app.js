let express = require('express');
let app = express();
let mongoose = require('mongoose');
let multer = require('multer');
let cookieParser = require('cookie-parser');
let postRouter = require('./routes/post');
let callbackRouter = require('./routes/callback-request');
let emailRouter = require('./routes/emails');
let userRouter = require('./routes/users')
let Post = require('./models/post').Post;
let auth = require('./controllers/auth')

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.anpep.mongodb.net/travels?retryWrites=true&w=majority').then(() => {
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
app.use(cookieParser());
app.use('/posts', postRouter);
app.use('/callback-request', callbackRouter);
app.use('/emails', emailRouter);
app.use('/user', userRouter);

app.get('/sight', async (req, resp) => {
    let id = req.query.id;
    let post = await Post.findOne({ id: id });
    resp.render('sight', {
        title: post.title,
        imageURL: post.imageURL,
        date: post.date,
        text: post.text
    })
})

app.get('/admin', (req, resp) => {
    let token = req.cookies['auth_token'];
    if (token && auth.checkToken(token)) {
        resp.render('admin');
    } else {
        resp.redirect('/login');
    }
})

app.get('/login', (res, resp) => {
    resp.render('login');
})

app.listen(3000, () => {
    console.log('Listening 3000...');
})