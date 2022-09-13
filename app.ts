import 'dotenv/config';
import {io, server} from './src/server';
import {Config} from './src/config/env';
import {setupEvents} from './src/sockets';

server.listen(Config.PORT, () => {
  console.info(`Server is running on port ${Config.PORT}!`);
  io.on('connection', (socket) => {
    console.info(`Socket connected: ${socket.id}`);
    setupEvents(io, socket);
  });
});
