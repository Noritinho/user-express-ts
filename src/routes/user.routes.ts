import { Router } from 'express';

import UsersController from '../controller/UsersController';

export const userRoutes = Router();

const usersController = new UsersController();

userRoutes.post('/', usersController.create);
