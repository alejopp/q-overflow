import Debug from 'debug';
import app from './app';

const PORT = 3001;
const debug = new Debug('q-overflow:root');



app.listen(PORT, () => {
  debug(`Server running at port ${PORT}`)
});
