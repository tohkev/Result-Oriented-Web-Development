let User = require('../models/users').User;
let express = require('express');
let router = express.Router();
let bcrypt = require('bcrypt');

router.post('/login', async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.find()
        .where({ email: email })
    if (user.length > 0) {
        let passResult = await bcrypt.compare(password, user[0].password)
        if (passResult) {
            res.send('Logged In');
        } else {
            res.send('Rejected');
        }
    } else {
        res.send('Rejected')
    }
})

router.post('/register', async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.find()
        .where({ email: email });
    if (user.length === 0) {
        let cryptPass = await bcrypt.hash(password, 12);
        let newUser = new User({
            email: email,
            password: cryptPass
        })
        await newUser.save();
        res.send('Signup Done!')
    } else {
        res.send('Rejected');
    }
})

module.exports = router;