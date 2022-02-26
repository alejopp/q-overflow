import Debug from 'debug'
import { Question } from '../models'
import { Answer } from '../models'
import mongoose from 'mongoose'


const debug = new Debug('platzi-overflow:db-api:question')

export default {

  findAll: (sort = '-createdAt') => {
    debug('Finding all questions')
    return  Question.find().populate('answers').sort(sort);
  },

  findById: (_id) => {
    const mongoId = mongoose.mongo.ObjectId(_id);
    debug(`Find question with id ${mongoId}`)
    return  Question
      .findOne({ _id: mongoId })
      .populate('user')
      .populate({
        path: 'answers',
        options: { sort: '-createdAt' },
        populate: {
          path: 'user',
          model: 'User'
        }
      })
  },

  create: (q) => {
    debug(`Creating new question ${q}`)
    const question = new Question(q)
    return question.save()
  },

  createAnswer: async (q, a) => {
    const answer = new Answer(a)
    const savedAnswer = await answer.save()
    q.answers.push(savedAnswer)
    await q.save()
    return savedAnswer
  }

}
