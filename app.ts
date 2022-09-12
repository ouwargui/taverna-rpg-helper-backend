import 'dotenv/config';
import {server} from './src/server';
import {Config} from './src/config/env';

server.listen(Config.PORT, () => {
  console.info(`Server is running on port ${Config.PORT}!`);
});
