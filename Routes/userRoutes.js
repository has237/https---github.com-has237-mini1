const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const authMiddleware = require('../Middleware/authMiddleware');

router.get('/:id', authMiddleware.authenticateUser, userController.getUserById);
router.put('/:id', authMiddleware.authenticateUser, userController.updateUser);

// Implement other user-related routes

module.exports = router;