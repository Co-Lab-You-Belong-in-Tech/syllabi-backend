const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {User} = require('./model.js');
const hash = require('../../utils/hash.js');
const generateToken = require('../../utils/token.js')

const register = (req, res) => {
    let user = new User ({
        name: req.body.name,
        email: req.body.email,
        passwordHash: hash(req.body.password),
        phone: req.body.phone,
        school: req.body.school
    });

   user.save()
        .then((newUser) => {
            const token = generateToken({
                user: newUser.id,
                isAdmin: newUser.isAdmin
            });
            res.status(201).json({
                token: token,
                userData: {
                    name: newUser.name,
                    email: newUser.email,
                    school: newUser.school

                }
            });
        })
        .catch(err => res.status(500).json({message: 'Server Error', error: err}))
};

const login = (req, res) => {
    User.findOne({email: req.body.email})
        .then((user) => {
            if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
                const token = jwt.sign( 
                    {
                        user: user.id,
                        isAdmin: user.isAdmin
                    },
                    process.env.SECRET,
                    {expiresIn: '1d'}
                )

                res.status(200).json({
                    token: token,
                    user: {
                        email:user.email,
                        phone: user.phone,
                        school: user.school
                    }
                })
            } else {
                res.status(401).json({message: 'wrong credentials'})
            }
        })
        .catch(err => res.status(500).json({message: 'server error', error: err}))
}

module.exports = {
    login,
    register
}