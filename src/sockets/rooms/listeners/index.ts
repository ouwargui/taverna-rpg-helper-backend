import {Server, Socket} from 'socket.io';
import {
  EmittersTypes,
  JoinRoomData,
  ListenersTypes,
} from '../../../modules/rooms/models/Room';
import {joinRoomController} from '../../../modules/rooms/usecases/joinRoom';

const setupRoomsListeners = (
  io: Server<ListenersTypes, EmittersTypes>,
  socket: Socket<ListenersTypes, EmittersTypes>,
) => {
  socket.on('join_room', (data: JoinRoomData) =>
    joinRoomController.handle(io, socket, data),
  );
};

export {setupRoomsListeners};
