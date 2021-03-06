const jwtToken = require('jsonwebtoken');
const secrets = require('../secrets.js');

function token(user){
    const payload = { data: user };
    const options = { expiresIn: '1d' }

    return jwtToken.sign(payload, secrets.jwtSecret, options)
};

module.exports = token