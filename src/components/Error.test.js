import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Error from './Error'
import { faker } from '@faker-js/faker'

const { lorem } = faker

describe.only('Error', () => {
  test('should render the error message', () => {
    const errorMessage = lorem.sentence()
    render(<Error error={errorMessage} />)
    const regex = new RegExp(`Error: ${errorMessage}`)
    const errorText = screen.getByText(regex)
    expect(errorText).toBeInTheDocument()
  })
});