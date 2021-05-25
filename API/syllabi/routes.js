const express = require('express');
const router = express.Router();

const {
    allSyllabi,
    // deleteSyllabi,
    // editSyllabi,
    newSyllabus,
    syllabus
} = require('./handler.js')

// router.get('/:id', syllabus);
router.get('/all', allSyllabi);
router.post('/post', newSyllabus)
// router.put('/:id' editSyllabi)
// router.delete('/:id', deleteSyllabi)

router.get('/greetings', (req, res) => {
    res.status(200).send('Holla')
});

module.exports = router;