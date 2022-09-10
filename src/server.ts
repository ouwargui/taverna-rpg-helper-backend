import express from 'express';
import 'express-async-errors';
import {ErrorHandler} from './middlewares/ErrorHandler';
import {routes} from './routes';

const app = express();

app.use(express.json());
app.use('/api/v1', routes);

app.use(ErrorHandler);

export {app};
