import {
  EmittersTypes,
  IoSocket,
  JoinRoomData,
  ListenersTypes,
} from '../../models/Room';
import {SocketUseCase} from '../../../../models/SocketUseCase';
import {UseCase} from '../../../../models/UseCase';

class JoinRoomUseCase
  implements
    UseCase<SocketUseCase<JoinRoomData, ListenersTypes, EmittersTypes>, void>
{
  async execute({
    io,
    socket,
    data,
  }: SocketUseCase<JoinRoomData, ListenersTypes, EmittersTypes>) {
    await this.leaveOldRoom({io, socket});

    socket.join(data);
    const response = {room: data, user: socket.data.uid};
    io.to(data).emit('joined_room', response);
  }

  async leaveOldRoom({io, socket}: IoSocket) {
    const rooms = io.sockets.adapter.sids.get(socket.id);
    rooms?.forEach((room) => {
      if (room.length === 4) {
        socket.leave(room);

        socket.emit('left_room', {
          room,
          user: socket.data.uid,
        });
      }
    });
  }
}

export {JoinRoomUseCase};
