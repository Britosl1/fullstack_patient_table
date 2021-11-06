import express from "express";
import { getUser, getUserId, updateUser, getUserMessage, deleteUser } from '../controllers/userControllers.js';

const router = express.Router();

router.get('/', getUserMessage);
router.get('/users', getUser);
router.get('/users/:userId', getUserId);
router.put('/users/:userId', updateUser);
router.delete('/users/:userId', deleteUser);

export default router;