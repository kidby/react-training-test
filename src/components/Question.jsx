import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../styles/styles.module.css'
import { setCurrentQuestion, addAnswer } from '../features/questionSlice'

/**
 * Question component that displays a question with options
 * @param {Object} props
 * @param {string} props.question - The question text
 * @param {Array} props.options - An array of option objects
 * @param {number} props.index - The index of the question in the array
 * @returns {JSX.Element} - The Question component
 */
function Question({ question, options, index }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { questionId } = useParams()
  const currentQuestion = useSelector(
    (state) => state.questions.currentQuestion
  )

  const handleOptionClick = (nextQuestion, option) => {
    dispatch(addAnswer({ questionId, option }))

    const destination = nextQuestion || '/results'
    if (currentQuestion !== destination) {
      dispatch(setCurrentQuestion(destination))
      navigate(destination)
    }
  }

  return (
      <div className={styles.questionContainer}>
          <h2 className={styles.questionText} data-testid={`question-${index + 1}`}>
              {question}
          </h2>
          <div className={styles.optionsContainer}>
              {options.map(({ label, value, nextQuestion }, optionIndex) => (
                  <button
                      key={optionIndex}
                      data-testid={`option-${optionIndex + 1}`}
                      className={styles.optionButton}
                      onClick={() => handleOptionClick(nextQuestion, { label, value })}
                      aria-label={`Choose ${label}`}
          >
                      {label}
                  </button>
        ))}
          </div>
      </div>
  )
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      nextQuestion: PropTypes.string,
    })
  ).isRequired,
  index: PropTypes.number.isRequired,
}

export default Question;
