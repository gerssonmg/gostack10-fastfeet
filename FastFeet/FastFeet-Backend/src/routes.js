import { Router } from 'express';

import DeliverymanController from './app/controllers/DeliverymanController';
import RecipientController from './app/controllers/RecipientController';
import SessionController from './app/controllers/SessionController';
import DeliveryController from './app/controllers/DeliveryController';

import AuthMiddleware from './app/middlewares/auth';

const routes = new Router();

/**
 * Cria sessão de autenticação JWT
 */
routes.post('/sessions', SessionController.store);

/**
 * Valida token JWT de autenticação
 */
routes.use(AuthMiddleware);

/**
 * Cadastra fornecedor
 */
routes.post('/recipients', RecipientController.store);

/**
 * Atualiza fornecedor
 */
routes.put('/recipients/:id', RecipientController.update);

/**
 * Lista encomendas não entregues ou canceladas
 * end_date === null
 */
routes.get('/deliveryman/:id', DeliverymanController.index);

/**
 * Lista encomendas entregues
 * end_date !== null
 */
routes.get('/deliveryman/:id/deliveries', DeliverymanController.show);

/**
 * Cadastra entregador
 */
routes.post('/deliveryman', DeliverymanController.store);

/**
 * Atualiza entregador
 */
routes.put('/deliveryman/:id', DeliverymanController.update);

/**
 * Remove entregador
 */
routes.delete('/deliveryman/:id', DeliverymanController.delete);

routes.get('/delivery', DeliveryController.index);
routes.post('/delivery', DeliveryController.store);
routes.put('/delivery/:id', DeliveryController.update);
routes.put('/delivery/:id/start', DeliveryController.update);
routes.put('/delivery/:id/end', DeliveryController.update);
routes.put('/delivery/:id/status', DeliveryController.update);
routes.delete('/delivery/:id', DeliveryController.delete);

export default routes;
