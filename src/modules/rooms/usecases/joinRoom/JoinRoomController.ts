import {Server, Socket} from 'socket.io';
import {SocketController} from '../../../../models/SocketController';
import {JoinRoomData} from '../../models/Room';
import {JoinRoomUseCase} from './JoinRoomUseCase';

class JoinRoomController implements SocketController<JoinRoomData> {
  private joinRoomUseCase: JoinRoomUseCase;

  constructor(joinRoomUseCase: JoinRoomUseCase) {
    this.joinRoomUseCase = joinRoomUseCase;
  }
  async handle(io: Server, socket: Socket, data: JoinRoomData) {
    this.joinRoomUseCase.execute({io, socket, data});
  }
}

export {JoinRoomController};
