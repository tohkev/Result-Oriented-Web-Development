let express = require('express');
let app = express();
let mongoose = require('mongoose');
let Post = require('./models/post').Post;

mongoose.connect('mongodb://localhost/travels').then(() => {
    console.log('Connected to MongoDB')
}).catch(() => {
    console.log('Something went wrong')
})

//test for seeing if posts will be recorded on the DB
// let post1 = new Post({
//     id: 2,
//     title: 'Statue of Liberty',
//     date: new Date(),
//     description: 'Some Description',
//     text: 'Some Text',
//     country: 'USA',
//     imageURL: '/images/1.jpg'
// });

// post1.save().then(() => {
//     console.log('Country has been saved');
// });

app.get('/posts', async (req, resp) => {
    let posts = await Post.find();
    resp.send(posts);
})

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Listening 3000...');
})