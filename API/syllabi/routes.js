const express = require('express');
const router = express.Router();

const {
    allSyllabi,
    deleteSyllabi,
    editSyllabi,
    newSyllabi,
    syllabi
} = require('./handler.js')

router.get('/:id', syllabi);
router.get('/all', allSyllabi)
router.post('/post', newSyllabi)
router.put('/:id' editSyllabi)
router.delete('/:id', deleteSyllabi)

router.get('/greetings', (req, res) => {
    res.status(200).send('Holla')
});

module.exports = router;