const express = require('express');
const router = express.Router();

const {
    register
} = require('./handler.js')

router.post('/register', register);

router.get('/greetings', (req, res) => {
    res.status(200).send('Holla')
});

module.exports = router;