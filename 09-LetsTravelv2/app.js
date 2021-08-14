let express = require('express');
let app = express();
let mongoose = require('mongoose');
let Post = require('./models/post').Post;
let multer = require('multer');

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

let id = 1;

app.get('/posts', async (req, resp) => {
    let posts = await Post.find();
    resp.send(posts);
})

app.post('/posts', async (req, resp) => {
    let reqBody = req.body;
    let imgPath;

    if (reqBody.imageURL) {
        imgPath = reqBody.imageURL;
    } else {
        imgPath = req.file.path.substring(req.file.path.indexOf("\\"), req.file.path.length);
    }

    let newPost = new Post({
        id: id++,
        title: reqBody.title,
        date: new Date(),
        description: reqBody.description,
        text: reqBody.text,
        country: reqBody.country,
        imageURL: imgPath
    })
    await newPost.save();
    resp.send('Created!')
})

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Listening 3000...');
})