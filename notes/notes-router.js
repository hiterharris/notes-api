const router = require('express').Router();

const Notes = require('./notes-model.js');

router.get('/', (req, res) => {
    Notes.find()
    .then(notes => {
      res.json(notes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get notes' });
    });
});

router.post('/', (req, res) => {
  const noteData = req.body;

  Notes.add(noteData)
  .then(note => {
    res.status(201).json(note);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new note' });
  });
});

module.exports = router;
