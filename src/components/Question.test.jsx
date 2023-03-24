import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Question from './Question'
import store from '../store'
import { faker } from '@faker-js/faker'

const { lorem } = faker

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}))

const renderWithRedux = (component) =>
  render(<Provider store={store}>{component}</Provider>)

const mock = {
  question: `${lorem.sentence()}?`,
  options: [lorem.word(), lorem.word(), lorem.word()],
}

const props = {
  question: mock.question,
  options: [
    {
      label: mock.options[0],
      value: mock.options[0],
      nextQuestion: '/question/2',
    },
    {
      label: mock.options[1],
      value: mock.options[1],
      nextQuestion: '/question/3',
    },
    {
      label: mock.options[2],
      value: mock.options[2],
      nextQuestion: '/question/4',
    },
  ],
}

describe('Question', () => {
  it('renders question and options', () => {
    renderWithRedux(
        <Question question={props.question} options={props.options} index={0} />
    )
    const questionElement = screen.getByTestId('question-1')
    expect(questionElement).toBeInTheDocument()
    expect(questionElement).toHaveTextContent(mock.question)
    const optionElements = screen.getAllByTestId(/option-[0-9]+/)
    expect(optionElements).toHaveLength(3)
    optionElements.forEach((option, i) =>
      expect(option).toHaveTextContent(mock.options[i])
    )
  })
});
