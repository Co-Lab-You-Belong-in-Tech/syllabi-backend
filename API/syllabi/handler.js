const bcrypt = require('bcryptjs');
const jwt =  require('jsonwebtoken');

const {Syllabi} = require('./model.js');

const allSyllabi = (req, res) => {
    const user = {user: req.body.id}
    Syllabi.find(user)
        .then((syllabi) => {
            if (syllabi) {
                res.status(200).json({
                    syllabi: syllabi
                })
            } else {
                res.status(404).json({message: 'Cannot find syllabi'})
            }
        })
        .catch(err => res.status(500).json({message: 'server error', error: err}))
};

module.exports = {
    allSyllabi
}