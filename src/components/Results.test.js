import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import Results from './Results'
import { reducer as questionsReducer } from '../features/questionSlice'

const store = configureStore({
  reducer: { questions: questionsReducer },
})

const renderWithProviders = (ui) =>
  render(
      <Provider store={store}>
          <BrowserRouter>{ui}</BrowserRouter>
      </Provider>
  )

describe('Results', () => {
  beforeEach(() => {
    store.dispatch({
      type: 'questions/addAnswer',
      payload: { questionId: '1', option: { label: 'Test answer' } },
    })
  })

  test('should display the last answer', () => {
    renderWithProviders(<Results />)
    const answerText = screen.getByText('Test answer')
    expect(answerText).toBeInTheDocument()
  })

  test('should navigate to the start page when the "Start Over" button is clicked', () => {
    renderWithProviders(<Results />)
    const startOverButton = screen.getByText('Start Over')
    fireEvent.click(startOverButton)
    expect(window.location.pathname).toBe('/')
  })
});
