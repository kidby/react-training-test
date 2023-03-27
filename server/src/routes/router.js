import express from 'express'
import createMockQuestions from '../utils/createMockQuestions.js'
import getData from '../utils/getData.js'
import validateData from '../utils/validateData.js'

/** questions */
const questionSchema = getData('questionSchema.json')
const questions =
  process.env.NODE_ENV === 'TEST'
    ? createMockQuestions(4)
    : getData('questions.json')
validateData(questions, questionSchema)

const router = express.Router()
router.get('/api/questions', (req, res) => res.json(questions))

export default router
