import express from 'express'
import { question } from './routes'

const app = express();
const cors = require('cors');
app.use(cors());

app.use('/api/questions', question);

export default app


