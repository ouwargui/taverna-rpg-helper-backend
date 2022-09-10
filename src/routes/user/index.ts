import {Router} from 'express';
import {createUserController} from '../../modules/user/usecases/createUser';

const user_routes = Router();

user_routes.post('/', (req, res) => createUserController.handle(req, res));

export {user_routes};
