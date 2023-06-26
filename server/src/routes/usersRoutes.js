/* express */
import express from 'express';

/* controllers */
import { UserController } from '../controllers/UserController';

/* setup */
const usersRoutes = express.Router();

/* routes */
usersRoutes.get('/users/:id', UserController.getUser);
usersRoutes.get('/users', UserController.getAllUsers);

export { usersRoutes };
