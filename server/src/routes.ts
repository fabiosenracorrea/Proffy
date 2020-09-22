import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import UsersController from './controllers/UsersController';

import ensureAuth from './middlewares/ensureAuth';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const userConnections = new UsersController();

routes.get('/classes', ensureAuth, classesController.index);
routes.post('/classes', ensureAuth, classesController.create);

routes.post('/connections', ensureAuth, connectionsController.create);
routes.get('/connections', connectionsController.index);

routes.post('/users', userConnections.create);
routes.post('/users/login', userConnections.login);


export default routes;