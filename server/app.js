import express from 'express'
import bodyParser from 'body-parser'
import { question } from './routes'
import { auth } from './routes'

const app = express();
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/questions', question);
app.use('/api/auth', auth);

export default app


