let User = require('../models/users').User;
let express = require('express');
let router = express.Router();
let bcrypt = require('bcrypt');
let auth = require('../controllers/auth')

router.post('/login', async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.find()
        .where({ email: email })
    if (user.length > 0) {
        let passResult = await bcrypt.compare(password, user[0].password)
        if (passResult) {
            let token = auth.generateToken(user[0]);
            res.cookie('auth_token', token);
            res.send({
                redirectURL: '/admin'
            });
        } else {
            res.status(400);
            res.send('Rejected');
        }
    } else {
        res.status(400);
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