import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  answers: {},
  currentQuestion: '/',
}

/**
 * questionSlice is a Redux slice that manages the state of questions and answers in the application
 * It contains reducers to set the current question and add an answer.
 */
const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    /**
     * Sets the current question in the state
     * @param {Object} state - The current state
     * @param {Object=} action - The action containing the payload with the new current question
     * @param {string} action.payload - The new current question to be set in the state
     */
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload
    },
    /**
     * Adds an answer to the state
     * @param {Object} state - The current state
     * @param {Object=} action - The action containing the payload with the answer to be added
     * @param {string} action.payload.path - The path associated with the answer
     */
    addAnswer: (state, action) => {
      const { option } = action.payload
      state.answers[action.payload.path] = option
    },
  },
})

export const {
  actions: { setCurrentQuestion, addAnswer },
  reducer,
} = questionSlice;