import {Server, Socket} from 'socket.io';
import {SocketAuthHandler} from '../middlewares/SocketAuthHandler';
import {setupRoomsListeners} from './rooms/listeners';

const setupEvents = (io: Server, socket: Socket) => {
  setupMiddlewares(io);
  setupRoomsListeners(io, socket);
};

const setupMiddlewares = (io: Server) => {
  SocketAuthHandler(io);
};

export {setupEvents};
