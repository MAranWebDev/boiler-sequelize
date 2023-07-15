/* express */
import express from 'express';

/* controllers */
import { UserController } from '../controllers/UserController';

/* setup */
const userRoutes = express.Router();

/* routes */
userRoutes.get('/users', UserController.getAllUsers);
userRoutes.get('/users/:id', UserController.getUser);
userRoutes.post('/users', UserController.createUser);

export { userRoutes };
