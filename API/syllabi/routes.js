const express = require('express');
const router = express.Router();

const {
    allSyllabi,
    deleteSyllabus,
    // editSyllabi,
    newSyllabus,
    syllabus
} = require('./handler.js')

router.get('/', allSyllabi);
router.get('/:id', syllabus);
router.post('/', newSyllabus)
// router.put('/:id' editSyllabi)
router.delete('/:id', deleteSyllabus)

router.get('/greetings', (req, res) => {
    res.status(200).send('Holla')
});

module.exports = router;