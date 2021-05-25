const express = require('express');
const router = express.Router();

const {
    login,
    register
} = require('./handler.js')

router.post('/register', register);
router.post('/login', login)

router.get('/greetings', (req, res) => {
    res.status(200).send('Holla')
});

module.exports = router;