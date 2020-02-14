import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import DeliverymanController from './app/controllers/DeliverymanController';
import RecipientController from './app/controllers/RecipientController';
import SessionController from './app/controllers/SessionController';
import DeliveryController from './app/controllers/DeliveryController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';

import AuthMiddleware from './app/middlewares/auth';

import FileDeliverymanController from './app/controllers/FileDeliverymanController';
import FileSignatureController from './app/controllers/FileSignatureController';

const routes = new Router();
const upload = multer(multerConfig);
/**
 * Cria sessão de autenticação JWT
 */
routes.post('/sessions', SessionController.store);

/**
 *
 */
routes.post('/delivery/:id/problems', DeliveryProblemController.store);
routes.get('/delivery/:id/problems', DeliveryProblemController.index);
routes.delete('/problem/:id/cancel-delivery', DeliveryProblemController.update);
routes.get('/delivery/problems', DeliveryProblemController.show);

/**
 *
 */
routes.put('/delivery/:id/status', DeliveryController.update);

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
routes.delete('/delivery/:id', DeliveryController.delete);

routes.post(
  '/files/deliveryman/:id',
  upload.single('file'),
  FileDeliverymanController.store
);
routes.post(
  '/files/signature/:id',
  upload.single('file'),
  FileSignatureController.store
);

export default routes;
