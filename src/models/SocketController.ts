import {Server, Socket} from 'socket.io';

export interface SocketController<T> {
  handle: (io: Server, socket: Socket, data: T) => Promise<void>;
}
