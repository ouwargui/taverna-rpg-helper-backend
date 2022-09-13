import {JoinRoomController} from './JoinRoomController';
import {JoinRoomUseCase} from './JoinRoomUseCase';

const joinRoomUseCase = new JoinRoomUseCase();
const joinRoomController = new JoinRoomController(joinRoomUseCase);

export {joinRoomController};
