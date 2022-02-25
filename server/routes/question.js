import express from 'express'

import {
  required,
  questionMiddleware,
  questionsMiddleware,
  questions
} from '../middleware'

const app = express.Router();

// GET  /api/questions
app.get('/', questionsMiddleware, (req, res) => {res.status(200).json(req.questions)});

// GET /api/questions/:id
app.get('/:id', questionMiddleware, (req, res) => {
  res.status(200).json(req.question);
});

// POST /api/questions
app.post('/', required, (req, res) => {
  const question = req.body;
  question._id = +new Date(); // +new Date are the seconds after 01-01-1970
  question.user = req.user;
  question.createdAt = new Date();
  question.answers = [];
  questions.unshift(question);
  res.status(201).json(question)
})

// /api/questions/:id/answers
app.post('/:id/answers', required, questionMiddleware, (req, res) => {
  const answer = req.body;
  const q = req.question;
  answer.createdAt = new Date();
  answer.user = req.user;
  q.answers.push(answer);
  res.status(201).json(answer);
})

export default app
