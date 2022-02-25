
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

export const questions = new Array(10).fill(question)

export const questionsMiddleware = (req, res, next) => {
  req.questions = questions
  next()
}

export const questionMiddleware = (req, res, next) => {
  const { id } = req.params
  req.question = questions.find(({ _id }) => _id === +id)
  next()
}