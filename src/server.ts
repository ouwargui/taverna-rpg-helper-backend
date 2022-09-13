import express from 'express';
import http from 'http';
import {Server} from 'socket.io';
import 'express-async-errors';
import {ErrorHandler} from './middlewares/ErrorHandler';
import {routes} from './routes';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use('/api/v1', routes);

app.use(ErrorHandler);

export {server, io};
