import {Server, Socket} from 'socket.io';

interface ListenersTypes {
  join_room: (data: JoinRoomData) => void;
}

interface EmittersTypes {
  joined_room: (data: JoinedRoomData) => void;
  left_room: (data: LeftRoomData) => void;
}

interface JoinedRoomData {
  room: string;
  user: string;
}

type LeftRoomData = JoinedRoomData;

type JoinRoomData = string;

interface IoSocket {
  io: Server;
  socket: Socket;
}

export {
  ListenersTypes,
  EmittersTypes,
  LeftRoomData,
  JoinRoomData,
  JoinedRoomData,
  IoSocket,
};
