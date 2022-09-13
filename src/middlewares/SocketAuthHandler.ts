import {Server} from 'socket.io';

const SocketAuthHandler = (io: Server) => {
  io.use((socket, next) => {
    const {user, token} = socket.handshake.auth as {
      user: string;
      token: string;
    };

    if (!user || !token) {
      return next(new Error('Not authorized'));
    }

    socket.data.uid = user;
    socket.data.token = token;

    return next();
  });
};

export {SocketAuthHandler};
