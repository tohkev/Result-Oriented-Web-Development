let CallbackRequest = require('../models/callback-request').CallbackRequest;
let uniqid = require('uniqid');
let express = require('express');
let router = express.Router();

router.get('/', async (req, res) => {
    resp.send(await CallbackRequest.find());
})

router.post('/', async (req, res) => {
    let reqBody = req.body;
    let newRequest = new CallbackRequest({
        id: uniqid,
        phoneNumber: req.phoneNumber,
        date: new Date()
    })
    await newRequest.save();
    resp.send('Accepted');
});

router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    await CallbackRequest.deleteOne({ id: id });
    resp.send('Deleted');
});

module.exports = router;