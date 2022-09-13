import {Server, Socket} from 'socket.io';
import {EventsMap} from 'socket.io/dist/typed-events';

export interface SocketUseCase<T, LT extends EventsMap, ET extends EventsMap> {
  io: Server<LT, ET>;
  socket: Socket<LT, ET>;
  data: T;
}
