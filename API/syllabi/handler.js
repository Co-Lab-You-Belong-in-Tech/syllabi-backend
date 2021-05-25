const bcrypt = require('bcryptjs');
const jwt =  require('jsonwebtoken');

const {Syllabi} = require('./model.js');

const allSyllabi = (req, res) => {
    const user = {user: req.body.id}
    Syllabi.find(user).select('-dateCreated -user')
        .then(syllabi => {
            console.log(syllabi)
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

const syllabus = (req, res) => {
    Syllabi.findById(req.params.id)
        .then(syllabus => {
            if (syllabus) {
                res.status(200).json({syallbus: syllabus})
            } else {
                res.status(400).json({message: 'cannot find syllabus'})
            }
        })
        .catch(err => res.status(500).json({message: 'server error', error: err}))
};

const newSyllabus = (req, res) => {
    let syllabus = new Syllabi({
        user: req.body.user,
        data: req.body.data
    });

    syllabus.save()
        .then(syllabus => {
            if (syllabus) {
                res.status(201).json({syllabus})
            } else {
                res.status(400).json({message: 'cannot create'})
            }
        })
        .catch(err => res.status(500).json({message: 'server error', error: err}))
};

const deleteSyllabus = (req, res) => {
    Syllabi.findByIdAndRemove(req.params.id)
        .then(syllabus => {
            res.status(200).json({message: 'The product has been removed', deleted: syllabus})
        })
        .catch(err => res.status(500).json({message: 'server error', error: err}))
}   

module.exports = {
    allSyllabi,
    deleteSyllabus,
    newSyllabus,
    syllabus
}