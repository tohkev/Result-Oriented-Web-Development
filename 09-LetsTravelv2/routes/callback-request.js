let CallbackRequest = require('../models/callback-request').CallbackRequest;
let uniqid = require('uniqid');
let express = require('express');
let router = express.Router();

// let cr = new CallbackRequest({
//     id: '1234',
//     phoneNumber: '+1111111111',
//     date: new Date()
// })
// cr.save();

router.get('/', async (req, res) => {
    res.send(await CallbackRequest.find());
})

router.post('/', async (req, res) => {
    let reqBody = req.body;
    let newRequest = new CallbackRequest({
        id: uniqid(),
        phoneNumber: reqBody.phoneNumber,
        date: new Date()
    })
    await newRequest.save();
    res.send('Accepted');
});

router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    await CallbackRequest.deleteOne({ id: id });
    res.send('Deleted');
});

module.exports = router;