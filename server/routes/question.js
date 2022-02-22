import express from 'express'

const app = express.Router()

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
app.get('/:id', (req, res) => {
  const { id } = req.params;
  const q = questions.find(({_id}) => _id === +id);
  console.log(q);
  res.status(200).json(q);
});

// POST /api/questions
app.post('/', (req, res) => {
  const question = req.body;
  console.log(req.body);
  question._id = +new Date(); // +new Date are the seconds after 01-01-1970
  question.user = {
    email: 'ranma@japan.com',
    password: '123456',
    firstName: 'Ranma',
    lastName: 'Saotome'
  };
  question.createdAt = new Date();
  question.answers = [];
  questions.unshift(question);
  res.status(201).json(question)
})

export default app
