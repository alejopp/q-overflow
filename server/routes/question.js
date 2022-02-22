import express from 'express'

const app = express.Router();

const currentUser = {
  firstName: 'Conan',
  lastName: 'Edogawa',
  email: 'conan@tms.com',
  password: '123456'
}

function questionMiddleware(req, res, next){
  const { id } = req.params;
  req.question = questions.find(({_id})=> _id === +id);
  next();
}

function userMiddleware(req, res, next){
  req.user = currentUser;
  next();
}

const question = {
  _id: 1,
  title: '¿How do I reuse a component from backend?',
  description: 'Miren esta es mi pregunta...',
  createdAt: new Date(),
  icon: 'devicon-android-plain colored',
  answers: [],
  user: {
    firstName: 'Conan',
    lastName: 'Edogawa',
    email: 'conan@tms.com',
    password: '123456'
  }
}

const questions = new Array(10).fill(question)

// /api/questions
app.get('/', (req, res) => {res.status(200).json(questions)});

// /api/questions/:id
app.get('/:id', questionMiddleware, (req, res) => {
  res.status(200).json(req.question);
});

// POST /api/questions
app.post('/', userMiddleware, (req, res) => {
  const question = req.body;
  console.log(req.body);
  question._id = +new Date(); // +new Date are the seconds after 01-01-1970
  question.user = req.user;
  question.createdAt = new Date();
  question.answers = [];
  questions.unshift(question);
  res.status(201).json(question)
})

app.post('/:id/answers', questionMiddleware, userMiddleware, (req, res) => {
  const answer = req.body;
  const q = req.question;
  answer.createdAt = new Date();
  answer.user = req.user;
  q.answers.push(answer);
  res.status(201).json(answer);
})

export default app
