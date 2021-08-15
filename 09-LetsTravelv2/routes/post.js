let Post = require('../models/post').Post;
let uniqid = require('uniqid');
let express = require('express');
let router = express.Router();



router.get('/', async (req, resp) => {
    let posts = await Post.find();
    resp.send(posts);
})

router.post('/', async (req, resp) => {
    let reqBody = req.body;
    let imgPath;

    if (reqBody.imageURL) {
        imgPath = reqBody.imageURL;
    } else {
        imgPath = req.file.path.substring(req.file.path.indexOf("\\"), req.file.path.length);
    }

    let newPost = new Post({
        id: uniqid(),
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

router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    await Post.deleteOne({ id: id })
    res.send('Deleted');
})

module.exports = router;