let Email = require('../models/email').Email;
let uniqid = require('uniqid');
let express = require('express');
let router = express.Router();

// let em = new Email({
//     id: '123456',
//     name: 'Ann',
//     email: 'Ann@annie.com',
//     message: 'Hello!',
//     date: new Date()
// })
// em.save();

router.get('/', async (req, res) => {
    res.send(await Email.find());
})

router.post('/', async (req, res) => {
    let reqBody = req.body;
    let newEmail = new Email({
        id: uniqid(),
        name: reqBody.name,
        email: reqBody.email,
        message: reqBody.message,
        date: new Date()
    })
    await newRequest.save();
    res.send('Accepted');
})

router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    await Email.deleteOne({ id: id });
    res.send('Deleted');
})

module.exports = router;