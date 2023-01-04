const express = require('express');
const notesController = require('../controllers/notesController');
const router = express.Router();

router.get('/', notesController.notes);
router.post('/', notesController.notes_create_post);
router.get('/create', notesController.notes_create_get);
router.get('/:id', notesController.notes_details);
router.delete('/:id', notesController.notes_delete);

module.exports = router;