const express = require('express');
const router = express.Router();
const bookController = require('../Controllers/bookController');

router.get('/', bookController.getAllBooks);
router.post('/', bookController.addBook);

// Implement other book-related routes

module.exports = router;