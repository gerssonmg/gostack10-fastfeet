import { Router } from 'express';

import UserController from './app/controllers/UserController';
import RecipientController from './app/controllers/RecipientController';
import SessionController from './app/controllers/SessionController';

import AuthMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(AuthMiddleware);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.put('/users', UserController.update);

export default routes;
