import {Router} from 'express';
import {user_routes} from './user';

const routes = Router();

routes.get('/', (req, res) => res.send('API is running!'));

routes.use('/user', user_routes);

export {routes};
