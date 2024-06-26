const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { validateUser, validateId } = require('../utils/validator');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/worko/user',authMiddleware, validateUser, UserController.createUser);
router.get('/worko/user', authMiddleware, UserController.getAllUsers);
router.get('/worko/user/:userId',  authMiddleware,validateId, UserController.getUserById);
router.put('/worko/user/:userId',  authMiddleware,validateId, UserController.updateUser);
router.patch('/worko/user/:userId',authMiddleware,  validateId, UserController.updateUser);
router.delete('/worko/user/:userId',authMiddleware,  validateId, UserController.softDeleteUser);

module.exports = router;
