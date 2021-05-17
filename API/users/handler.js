const {User} = require('./model.js')

const register = async (req, res) => {
    let hashedPass = hash(req.body.pass);

    let user = new User {
        name: req.body.name,
        email: req.body.email,
        password: hashedPass
    };

    await user.save()
        .then(([newUser]) => {
            const token = generateToken(newUser)
            res.status(201).json({
                token: token,
                userData: newUser
            });
        })
        .catch(err => res.status(500).json({message: err}))
};