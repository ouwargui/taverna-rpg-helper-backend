import {Router} from 'express';
import {user_routes} from './user';

const routes = Router();

routes.use('/', (req, res) => res.send('API is running!'));

routes.use('/user', user_routes);

export {routes};
