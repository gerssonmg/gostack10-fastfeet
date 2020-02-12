import { Router } from 'express';

import UserController from './app/controllers/UserController';
import DeliveryController from './app/controllers/DeliverymanController';
import RecipientController from './app/controllers/RecipientController';
import SessionController from './app/controllers/SessionController';
import OrderController from './app/controllers/OrderController';

import AuthMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(AuthMiddleware);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.put('/users', UserController.update);

routes.get('/deliveryman', DeliveryController.index);
routes.post('/deliveryman', DeliveryController.store);
routes.put('/deliveryman/:id', DeliveryController.update);
routes.delete('/deliveryman/:id', DeliveryController.delete);

routes.get('/order', OrderController.index);
routes.post('/order', OrderController.store);
routes.put('/order/:id', OrderController.update);
routes.delete('/order/:id', OrderController.delete);

export default routes;
