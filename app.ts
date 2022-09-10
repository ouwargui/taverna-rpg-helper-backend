import 'dotenv/config';
import {app} from './src/server';
import {Config} from './src/config/env';

app.listen(Config.PORT, () => {
  console.info(`Server is running on port ${Config.PORT}!`);
});
