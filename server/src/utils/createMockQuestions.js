import { faker } from '@faker-js/faker'

const { lorem, random } = faker

/**
 * Generates an array of test question data.
 *
 * @param {number} numQuestions - The number of questions to generate.
 * @returns {Array} An array of test question objects.
 */
const createMockQuestions = (numQuestions) =>
  Array.from({ length: numQuestions }, (_, i) => {
    const question = {
      id: i + 1,
      path: i === 0 ? '/' : `/question${i + 1}`,
      question: lorem.sentence(),
      options: [],
    }

    const numOptions = random.numeric()

    question.options = Array.from({ length: numOptions }, (_) => {
      const option = {
        label: lorem.word(),
        value: lorem.word(),
      }

      if (i < numQuestions - 1) {
        option.nextQuestion = `/question${i + 2}`
      }

      return option
    })

    return question
  })

export default createMockQuestions
