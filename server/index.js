import Debug from 'debug';
import app from './app';
import mongoose from 'mongoose'
import { mongoUrl } from './config'

const PORT = 3001;
const debug = new Debug('q-overflow:root');

async function start() {
  await mongoose.connect(mongoUrl, {
                  useNewUrlParser: true
          });

  app.listen(PORT, () => {
          debug(`Server running at PORT ${PORT}.`);
  });
}

start();
