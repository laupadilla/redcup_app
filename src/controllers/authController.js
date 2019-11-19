const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body)
        .then(result => {
            console.log(result);

            return res.send({ usuario: result });
        })
        .catch(err => console.log(err));
        
    } catch (err){
        return res.status(400).send({ error: 'Registration failed' });
    }
});


module.exports = app => app.use('/auth', router);