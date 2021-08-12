let express = require('express');
let app = express();
let mongoose = require('mongoose');
let Post = require('./models/post').Post;

mongoose.connect('mongodb://localhost/travels').then(() => {
    console.log('Connected to MongoDB')
}).catch(() => {
    console.log('Something went wrong')
})

let post1 = new Post({
    id: 2,
    title: 'Statue of Liberty',
    date: new Date(),
    description: 'Some Description',
    text: 'Some Text',
    country: 'USA',
    imageURL: '/images/1.jpg'
});

post1.save().then(() => {
    console.log('Country has been saved');
});

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Listening 3000...');
})