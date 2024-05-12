import express from 'express';

import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  logoutUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js';

const router = express.Router();

import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(getUsers);
router.post('/logout', logoutUser);
router.post('/auth', authUser);
router.route('/profile')
    
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);


router.route('/:id').delete(deleteUser).get(getUserById).put(updateUser);

export default router;