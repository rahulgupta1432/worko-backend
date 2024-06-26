const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { validateUser, validateId } = require('../utils/validator');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/worko/user',  validateUser, UserController.createUser);
router.get('/worko/user',  UserController.getAllUsers);
router.get('/worko/user/:userId',  validateId, UserController.getUserById);
router.put('/worko/user/:userId',  validateId, UserController.updateUser);
router.patch('/worko/user/:userId',  validateId, UserController.updateUser);
router.delete('/worko/user/:userId',  validateId, UserController.softDeleteUser);

module.exports = router;
