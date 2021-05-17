const {User} = require('./model.js');
const hash = require('../../utils/hash.js');
const generateToken = require('../../utils/token.js')

const register = async (req, res) => {
    let hashedPass = hash(req.body.pass);

    let user = new User ({
        name: req.body.name,
        email: req.body.email,
        password: hashedPass
    });

   user.save()
        .then((newUser) => {
            const token = generateToken(newUser);
            res.status(201).json({
                token: token,
                userData: newUser
            });
        })
        .catch(err => res.status(500).json({message: 'Server Error', error: err}))
};

module.exports = {
    register
}