const router = require('express').Router();

const Notes = require('./notes-model.js');

router.get('/', (req, res) => {
    Notes.find()
    .then(notes => {
      res.json(notes);
    })
    .catch(err => res.send(err));
});

module.exports = router;
